const MIRROR_PROPS = ['fontFamily', 'fontSize', 'fontWeight', 'letterSpacing', 'lineHeight', 'paddingTop', 'paddingLeft', 'paddingRight', 'borderTopWidth', 'borderLeftWidth', 'boxSizing', 'textTransform', 'wordSpacing', 'tabSize'] as const;

export function caretOffset(textarea: HTMLTextAreaElement, index: number) {
  const mirror = document.createElement('div');
  const style = window.getComputedStyle(textarea);
  MIRROR_PROPS.forEach((prop) => { mirror.style[prop] = style[prop]; });
  Object.assign(mirror.style, { position: 'absolute', visibility: 'hidden', whiteSpace: 'pre-wrap', wordWrap: 'break-word', overflow: 'hidden', width: `${textarea.clientWidth}px`, top: '0', left: '0' });
  mirror.textContent = textarea.value.slice(0, index);
  const marker = document.createElement('span');
  marker.textContent = '\u200b';
  mirror.appendChild(marker);
  textarea.parentElement?.appendChild(mirror);
  const top = marker.offsetTop - textarea.scrollTop;
  const left = marker.offsetLeft - textarea.scrollLeft;
  const height = parseFloat(style.lineHeight) || marker.offsetHeight;
  mirror.remove();
  return { top, left, height };
}
