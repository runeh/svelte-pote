import raw from './example.json';
import { parse, normalize } from 'pote-parse';

const stuff = normalize(parse(raw));
export { stuff };
