function escape(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
export function highlightCode(source: string) {
  return source
    .split(
      /(\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:import|from|export|default|const|let|function|return|async|await|true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b)/g,
    )
    .map((token) => {
      const kind = token.startsWith('//')
        ? 'comment'
        : /^['"]/.test(token)
          ? 'string'
          : /^(import|from|export|default|const|let|function|return|async|await|true|false|null|undefined)$/.test(
                token,
              )
            ? 'keyword'
            : /^\d/.test(token)
              ? 'number'
              : '';
      return kind
        ? `<span class="code-token--${kind}">${escape(token)}</span>`
        : escape(token);
    })
    .join('');
}
