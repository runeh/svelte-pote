import type { NormalizedTextSpan } from 'pote-parse';
import { SvelteComponentTyped } from 'svelte';
import CodeComponent from './Code.svelte';
import StrongComponent from './Strong.svelte';

import DelComponent from './Del.svelte';
import UnderlineComponent from './Underline.svelte';
import LinkComponent from './Link.svelte';
import EmComponent from './Em.svelte';

export const markTypes = [
  'code',
  'del',
  'em',
  'strong',
  'underline',
  'link',
] as const;

export type MarkType = typeof markTypes[number];

export class MarkTypeComponent extends SvelteComponentTyped<{
  span: NormalizedTextSpan;
}> {}

export function isMarkType(e: string): e is MarkType {
  return (markTypes as readonly string[]).includes(e);
}

export const markComponents: Record<MarkType, typeof MarkTypeComponent> = {
  code: CodeComponent,
  del: DelComponent,
  em: EmComponent,
  link: LinkComponent,
  strong: StrongComponent,
  underline: UnderlineComponent,
};
