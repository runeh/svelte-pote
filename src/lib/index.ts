import * as rt from 'runtypes';
import stuff from './example.json';

const blockChildRt = rt.Record({});

const markDefRt = rt.Union(
  rt.Record({ _key: rt.String, type: rt.String }),
  rt.Dictionary(rt.String),
);

const blockRt = rt.Record({
  _key: rt.String,
  type: rt.String,
  children: rt.Array(blockChildRt),
  markDefs: rt.Array(markDefRt),
});

interface Block {
  _key: string;
  _type: 'block';
  children: [
    {
      _key: '2c01f20ff18d';
      _type: 'span';
      marks: [];
      text: 'What is Lorem Ipsum?';
    },
  ];
  markDefs: readonly string[];
  style: string;
}

console.log(stuff.length);

export { stuff };
