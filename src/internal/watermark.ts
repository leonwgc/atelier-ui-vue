export interface WatermarkFont { color?: string; fontSize?: number; fontWeight?: 'normal' | 'light' | 'bold' | number; fontFamily?: string; fontStyle?: 'normal' | 'italic'; textAlign?: CanvasTextAlign }

const DEFAULT_FONT: Required<WatermarkFont> = { color: 'rgba(0, 0, 0, 0.12)', fontSize: 16, fontWeight: 'normal', fontFamily: 'sans-serif', fontStyle: 'normal', textAlign: 'center' };

function loadImage(src: string) {
  return new Promise<HTMLImageElement | null>((resolve) => {
    const image = new window.Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

export async function renderTile({ content, image, width, height, rotate, gap, font }: { rotate: number; gap: [number, number]; font: WatermarkFont; content?: string | string[]; image?: string; width?: number; height?: number }) {
  const ratio = window.devicePixelRatio || 1;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return null;
  const merged = { ...DEFAULT_FONT, ...font };
  const lines = Array.isArray(content) ? content : content ? [content] : [];
  const picture = image ? await loadImage(image) : null;

  // Measure the raw mark before rotation.
  context.font = `${merged.fontStyle} normal ${merged.fontWeight} ${merged.fontSize}px/${merged.fontSize * 1.5}px ${merged.fontFamily}`;
  const lineHeight = merged.fontSize * 1.5;
  let markWidth = width ?? 0;
  let markHeight = height ?? 0;
  if (picture) {
    markWidth = width ?? picture.width;
    markHeight = height ?? (width ? (picture.height / picture.width) * width : picture.height);
  } else {
    if (!width) markWidth = Math.max(...lines.map((line) => context.measureText(line).width), 0);
    if (!height) markHeight = lineHeight * lines.length;
  }
  const radians = (rotate * Math.PI) / 180;
  const rotatedWidth = Math.abs(markWidth * Math.cos(radians)) + Math.abs(markHeight * Math.sin(radians));
  const rotatedHeight = Math.abs(markWidth * Math.sin(radians)) + Math.abs(markHeight * Math.cos(radians));
  const tileWidth = Math.ceil(rotatedWidth + gap[0]);
  const tileHeight = Math.ceil(rotatedHeight + gap[1]);
  canvas.width = tileWidth * ratio;
  canvas.height = tileHeight * ratio;
  context.scale(ratio, ratio);
  context.translate(tileWidth / 2, tileHeight / 2);
  context.rotate(radians);
  if (picture) {
    context.drawImage(picture, -markWidth / 2, -markHeight / 2, markWidth, markHeight);
  } else {
    context.font = `${merged.fontStyle} normal ${merged.fontWeight} ${merged.fontSize}px/${lineHeight}px ${merged.fontFamily}`;
    context.fillStyle = merged.color;
    context.textAlign = merged.textAlign;
    context.textBaseline = 'middle';
    const startY = -((lines.length - 1) * lineHeight) / 2;
    lines.forEach((line, index) => context.fillText(line, merged.textAlign === 'left' ? -markWidth / 2 : merged.textAlign === 'right' ? markWidth / 2 : 0, startY + index * lineHeight));
  }
  return { url: canvas.toDataURL(), tileWidth, tileHeight };
}
