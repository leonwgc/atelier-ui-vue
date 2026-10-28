export type TimeFormat = 'HH:mm' | 'HH:mm:ss';
export interface TimeParts { hour: number; minute: number; second: number }
const pad = (value: number) => String(value).padStart(2, '0');

export function parseTime(value: string | null | undefined): TimeParts | null {
  if (!value) return null;
  const match = /^(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?$/.exec(value.trim());
  if (!match) return null;
  const [hour, minute, second = 0] = [Number(match[1]), Number(match[2]), Number(match[3] ?? 0)];
  if (hour > 23 || minute > 59 || second > 59) return null;
  return { hour, minute, second };
}

export function formatTime(parts: TimeParts, format: TimeFormat = 'HH:mm') {
  return format === 'HH:mm:ss' ? `${pad(parts.hour)}:${pad(parts.minute)}:${pad(parts.second)}` : `${pad(parts.hour)}:${pad(parts.minute)}`;
}

