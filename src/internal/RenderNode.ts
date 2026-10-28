import { defineComponent } from 'vue';
import type { VNodeChild, PropType } from 'vue';
export default defineComponent({ name: 'RenderNode', props: { content: { type: [String, Number, Boolean, Object, Array] as PropType<VNodeChild> } }, setup: props => () => props.content });
