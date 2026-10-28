const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
export interface HSVA { h: number; s: number; v: number; a: number }
export interface RGBA { r: number; g: number; b: number; a: number }
export type ColorFormat = 'hex' | 'rgb' | 'hsl';
export interface ColorValue { hex: string; rgb: RGBA; hsv: HSVA; toString: (format?: ColorFormat) => string }

const hex2 = (value: number) => Math.round(clamp(value, 0, 255)).toString(16).padStart(2, '0');

export function parseColor(input: string): RGBA | null {
  const text = input.trim();
  const hex = /^#?([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i.exec(text);
  if (hex) {
    let digits = hex[1];
    if (digits.length <= 4) digits = digits.split('').map((d) => d + d).join('');
    const int = parseInt(digits.slice(0, 6), 16);
    const a = digits.length === 8 ? parseInt(digits.slice(6, 8), 16) / 255 : 1;
    return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255, a };
  }
  const rgb = /^rgba?\(\s*(\d{1,3})\s*[, ]\s*(\d{1,3})\s*[, ]\s*(\d{1,3})\s*(?:[,/]\s*([\d.]+%?)\s*)?\)$/i.exec(text);
  if (rgb) {
    const a = rgb[4] ? (rgb[4].endsWith('%') ? Number(rgb[4].slice(0, -1)) / 100 : Number(rgb[4])) : 1;
    return { r: Number(rgb[1]), g: Number(rgb[2]), b: Number(rgb[3]), a: clamp(a, 0, 1) };
  }
  const hsl = /^hsla?\(\s*([\d.]+)\s*[, ]\s*([\d.]+)%\s*[, ]\s*([\d.]+)%\s*(?:[,/]\s*([\d.]+%?)\s*)?\)$/i.exec(text);
  if (hsl) {
    const h = Number(hsl[1]) / 360; const s = Number(hsl[2]) / 100; const l = Number(hsl[3]) / 100;
    const a = hsl[4] ? (hsl[4].endsWith('%') ? Number(hsl[4].slice(0, -1)) / 100 : Number(hsl[4])) : 1;
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s; const p = 2 * l - q;
    const channel = (t: number) => { t = (t + 1) % 1; if (t < 1 / 6) return p + (q - p) * 6 * t; if (t < 1 / 2) return q; if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6; return p; };
    return { r: Math.round(channel(h + 1 / 3) * 255), g: Math.round(channel(h) * 255), b: Math.round(channel(h - 1 / 3) * 255), a: clamp(a, 0, 1) };
  }
  return null;
}

export function rgbToHsv({ r, g, b, a }: RGBA): HSVA {
  const rn = r / 255; const gn = g / 255; const bn = b / 255;
  const max = Math.max(rn, gn, bn); const min = Math.min(rn, gn, bn); const d = max - min;
  let h = 0;
  if (d) {
    if (max === rn) h = ((gn - bn) / d) % 6;
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h = (h * 60 + 360) % 360;
  }
  return { h, s: max ? d / max : 0, v: max, a };
}

export function hsvToRgb({ h, s, v, a }: HSVA): RGBA {
  const c = v * s; const x = c * (1 - Math.abs(((h / 60) % 2) - 1)); const m = v - c;
  const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return { r: Math.round((r + m) * 255), g: Math.round((g + m) * 255), b: Math.round((b + m) * 255), a };
}

export function toHex(rgb: RGBA, withAlpha = rgb.a < 1) {
  return `#${hex2(rgb.r)}${hex2(rgb.g)}${hex2(rgb.b)}${withAlpha ? hex2(rgb.a * 255) : ''}`;
}

export function formatColor(rgb: RGBA, format: ColorFormat) {
  if (format === 'hex') return toHex(rgb);
  if (format === 'rgb') return rgb.a < 1 ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Number(rgb.a.toFixed(2))})` : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const { h, s, v, a } = rgbToHsv(rgb);
  const l = v * (1 - s / 2);
  const sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
  const base = `${Math.round(h)}, ${Math.round(sl * 100)}%, ${Math.round(l * 100)}%`;
  return a < 1 ? `hsla(${base}, ${Number(a.toFixed(2))})` : `hsl(${base})`;
}

export function makeColor(hsv: HSVA): ColorValue {
  const rgb = hsvToRgb(hsv);
  return { hex: toHex(rgb), rgb, hsv, toString: (format: ColorFormat = 'hex') => formatColor(rgb, format) };
}

