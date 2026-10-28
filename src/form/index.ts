import { computed, defineComponent, h, inject, onScopeDispose, provide, shallowRef, watchEffect } from 'vue';
import type { InjectionKey, PropType } from 'vue';
import { FormControl } from './control';
import type { Control, FieldValues, RegisterOptions, UseFormOptions } from './types';
export type * from './types';
const key: InjectionKey<Control> = Symbol('AtelierForm');
function useSnapshot<T extends FieldValues>(control: Control<T>) {
  const state = shallowRef(control._control.getSnapshot());
  const dispose = control._control.subscribe(() => { state.value = control._control.getSnapshot(); });
  onScopeDispose(dispose);
  return state;
}
function fromControl<T extends FieldValues>(control: Control<T>) {
  const instance = control._control;
  const snapshot = useSnapshot(control);
  const formState = computed(() => snapshot.value);
  function register(name: string, rules?: RegisterOptions<T>) {
    instance.register(name, rules);
    return {
      name,
      get modelValue() { void snapshot.value; return instance.getValue(name); },
      'onUpdate:modelValue': (value: unknown) => instance.setValue(name, value),
      onBlur: () => instance.touch(name),
    };
  }
  return {
    register, unregister: instance.unregister, control,
    get formState() { return formState.value; },
    handleSubmit: instance.handleSubmit,
    watch: (name?: string) => { void snapshot.value; return name ? instance.getValue(name) : instance.getValues(); },
    setValue: (name: string, value: unknown, options?: { shouldValidate?: boolean }) => instance.setValue(name, value, options?.shouldValidate),
    getValues: instance.getValues, reset: instance.reset,
    trigger: (name?: string) => instance.validate(name ? [name] : undefined),
  };
}
export function useForm<T extends FieldValues = FieldValues>(options: UseFormOptions<T> = {}) {
  return fromControl<T>({ _control: new FormControl<T>(options) });
}
export function useFormContext<T extends FieldValues = FieldValues>() {
  const control = inject(key);
  if (!control) throw new Error('useFormContext must be used inside FormProvider');
  return fromControl(control as Control<T>);
}
export function useWatch<T extends FieldValues>({ control, name }: { control: Control<T>; name: string }) {
  const snapshot = useSnapshot(control);
  return computed(() => { void snapshot.value; return control._control.getValue(name); });
}
export const FormProvider = defineComponent({
  name: 'FormProvider', props: { control: { type: Object as PropType<Control>, required: true } },
  setup(props, { slots }) { provide(key, props.control); return () => slots.default?.(); },
});
export const Controller = defineComponent({
  name: 'Controller',
  props: { control: { type: Object as PropType<Control>, required: true }, name: { type: String, required: true }, rules: Object as PropType<RegisterOptions> },
  setup(props, { slots }) {
    const snapshot = useSnapshot(props.control);
    watchEffect(cleanup => { props.control._control.register(props.name, props.rules); cleanup(() => props.control._control.unregister(props.name, !props.control._control.options.shouldUnregister)); });
    return () => { const state = snapshot.value; const instance = props.control._control; return slots.default?.({ field: { name: props.name, modelValue: instance.getValue(props.name), 'onUpdate:modelValue': (value: unknown) => instance.setValue(props.name, value), onBlur: () => instance.touch(props.name) }, fieldState: { error: state.errors[props.name], isTouched: !!state.touchedFields[props.name], isDirty: !!state.dirtyFields[props.name] }, formState: state }) ?? h('span'); };
  },
});
let fieldId = 0;
export function useFieldArray<T extends FieldValues, Item extends FieldValues = FieldValues>({ control, name }: { control: Control<T>; name: string }) {
  const snapshot = useSnapshot(control); const ids: string[] = [];
  const values = computed(() => { void snapshot.value; const value = control._control.getValue(name); return Array.isArray(value) ? value as Item[] : []; });
  const newId = () => `at-field-${++fieldId}`;
  const fields = computed(() => { while (ids.length < values.value.length) ids.push(newId()); ids.length = values.value.length; return values.value.map((item, index) => ({ ...item, id: ids[index] })); });
  function replace(next: Item[]) { control._control.setValue(name, next); }
  return {
    get fields() { return fields.value; },
    append(item: Item) { void fields.value; ids.push(newId()); replace([...values.value, item]); },
    prepend(item: Item) { void fields.value; ids.unshift(newId()); replace([item, ...values.value]); },
    insert(index: number, item: Item) { void fields.value; ids.splice(index, 0, newId()); const next = [...values.value]; next.splice(index, 0, item); replace(next); },
    remove(index?: number) { void fields.value; if (index === undefined) { ids.length = 0; replace([]); } else { ids.splice(index, 1); replace(values.value.filter((_, at) => index !== at)); } },
    update(index: number, item: Item) { replace(values.value.map((value, at) => index === at ? item : value)); },
    swap(first: number, second: number) { void fields.value; const next = [...values.value]; if (!next[first] || !next[second]) return; [next[first], next[second]] = [next[second], next[first]]; [ids[first], ids[second]] = [ids[second], ids[first]]; replace(next); },
    move(from: number, to: number) { void fields.value; const next = [...values.value]; if (!next[from]) return; const [item] = next.splice(from, 1); const [id] = ids.splice(from, 1); next.splice(to, 0, item); ids.splice(to, 0, id); replace(next); },
    replace,
  };
}
