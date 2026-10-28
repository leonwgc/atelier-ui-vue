export function vueApiName(name: string, rows: string[][]) {
  const slots: Record<string, string> = { children: '#default', optionRender: '#option', labelRender: '#label', titleRender: '#title', cellRender: '#cell', headerRender: '#header', displayRender: '#display', indicatorsRender: '#indicators', statusRender: '#status', checkedChildren: '#checked', unCheckedChildren: '#unchecked', renderItem: '#default' };
  const transfer = rows.some(row => row[0].includes('targetKeys'));
  const hasModel = rows.some(row => row[0].includes('defaultValue'));
  return name.split(' / ').map(part => {
    if (slots[part]) return slots[part];
    if (transfer && part === 'render') return '#item';
    if (transfer && part === 'footer') return '#footer';
    if (part === 'checked' || part === 'value' && hasModel) return 'modelValue (v-model)';
    if (part === 'defaultChecked') return 'defaultChecked';
    if (part === 'className') return 'class';
    if (part === 'onOpenChange') return '@update:open';
    if (part === 'onVisibleChange') return '@update:visible';
    if (/^on[A-Z]/.test(part)) return '@' + part.charAt(2).toLowerCase() + part.slice(3);
    return part;
  }).join(' / ');
}
