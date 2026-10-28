export type FloatingPlacement = 'top' | 'bottom' | 'left' | 'right';
export type PopupPlacement = FloatingPlacement | 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end';
export interface FloatingPosition { top: number; left: number; width?: number; placement: PopupPlacement }

const GAP = 6;
const EDGE = 12;

function splitPlacement(placement: PopupPlacement): { side: FloatingPlacement; align: 'center' | 'start' | 'end' } {
  const [side, align] = placement.split('-') as [FloatingPlacement, 'start' | 'end' | undefined];
  return { side, align: align ?? 'center' };
}
const oppositeSide: Record<FloatingPlacement, FloatingPlacement> = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };

export function getFloatingPosition(anchor: HTMLElement, floating: HTMLElement, preferred: PopupPlacement, gap = GAP): FloatingPosition {
  return positionForRects(anchor.getBoundingClientRect(), floating.getBoundingClientRect(), preferred, gap);
}

export interface RectLike { top: number; left: number; width: number; height: number; right: number; bottom: number }

export function positionForRects(a: RectLike, f: RectLike, preferred: PopupPlacement, gap = GAP): FloatingPosition {
  const { side: preferredSide, align } = splitPlacement(preferred);
  const spaces: Record<FloatingPlacement, number> = {
    top: a.top - EDGE,
    bottom: window.innerHeight - a.bottom - EDGE,
    left: a.left - EDGE,
    right: window.innerWidth - a.right - EDGE,
  };
  const required = preferredSide === 'top' || preferredSide === 'bottom' ? f.height + gap : f.width + gap;
  const alternate = oppositeSide[preferredSide];
  const side = spaces[preferredSide] >= required ? preferredSide
    : spaces[alternate] >= required ? alternate
      : spaces[preferredSide] >= spaces[alternate] ? preferredSide : alternate;

  let top: number;
  let left: number;
  if (side === 'top' || side === 'bottom') {
    top = side === 'top' ? a.top - f.height - gap : a.bottom + gap;
    left = align === 'start' ? a.left : align === 'end' ? a.right - f.width : a.left + (a.width - f.width) / 2;
  } else {
    left = side === 'left' ? a.left - f.width - gap : a.right + gap;
    top = align === 'start' ? a.top : align === 'end' ? a.bottom - f.height : a.top + (a.height - f.height) / 2;
  }
  return {
    top: Math.max(EDGE, Math.min(top, window.innerHeight - f.height - EDGE)),
    left: Math.max(EDGE, Math.min(left, window.innerWidth - f.width - EDGE)),
    placement: align === 'center' ? side : `${side}-${align}` as PopupPlacement,
  };
}
