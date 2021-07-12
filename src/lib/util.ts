import { isMarkType, MarkType } from './components';
import type { NormalizedTextSpan } from 'pote-parse';

// fixme: only takes first
export function guessSpanType(span: NormalizedTextSpan): MarkType | undefined {
  return span.marks
    .map((e) => e.type)
    .filter(isMarkType)
    .pop();
}

export function getFirstMark(span: NormalizedTextSpan): string | undefined {
  return span.marks[0]?.type;
}
