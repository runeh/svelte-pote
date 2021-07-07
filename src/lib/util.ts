import { isMarkType, MarkType } from '$lib/serializers';
import type { NormalizedTextSpan } from 'pote-parse';

export function guessSpanType(span: NormalizedTextSpan): MarkType | undefined {
  const markType: MarkType | undefined = span.marks
    .map((e) => e.type)
    .filter(isMarkType)
    .pop();

  return markType;
}
