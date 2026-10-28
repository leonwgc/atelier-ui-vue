export function formatStatistic(value: number | string, { precision, groupSeparator = ',', decimalSeparator = '.' }: { precision?: number; groupSeparator?: string; decimalSeparator?: string }) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return { integer: String(value), decimal: '' };
  const fixed = precision != null ? Math.abs(value).toFixed(precision) : String(Math.abs(value));
  const [integerPart, decimalPart = ''] = fixed.split('.');
  const grouped = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
  return { integer: `${value < 0 ? '-' : ''}${grouped}`, decimal: decimalPart ? `${decimalSeparator}${decimalPart}` : '' };
}

const pad = (value: number, length = 2) => String(value).padStart(length, '0');

export function formatCountdown(remaining: number, format = 'HH:mm:ss') {
  let rest = Math.max(0, remaining);
  const hasDays = /D/.test(format);
  const hasHours = /H/.test(format);
  const hasMinutes = /m/.test(format);
  const days = hasDays ? Math.floor(rest / 86_400_000) : 0;
  rest -= days * 86_400_000;
  const hours = hasHours ? Math.floor(rest / 3_600_000) : 0;
  rest -= hours * 3_600_000;
  const minutes = hasMinutes ? Math.floor(rest / 60_000) : 0;
  rest -= minutes * 60_000;
  const seconds = Math.floor(rest / 1000);
  const millis = rest - seconds * 1000;
  return format
    .replace(/D+/g, (token) => pad(days, token.length))
    .replace(/H+/g, (token) => pad(hours, token.length))
    .replace(/m+/g, (token) => pad(minutes, token.length))
    .replace(/s+/g, (token) => pad(seconds, token.length))
    .replace(/S+/g, (token) => pad(millis, 3).slice(0, token.length));
}

