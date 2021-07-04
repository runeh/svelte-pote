import { parsePortableText } from '../raw-parser';

describe('raw parser', () => {
  it('smoke test', () => {
    const raw = [
      {
        _key: '08b36691aa6c',
        _type: 'block',
        children: [
          {
            _key: '2c01f20ff18d',
            _type: 'span',
            marks: [],
            text: 'What is Lorem Ipsum?',
          },
        ],
        markDefs: [],
        style: 'h2',
      },
    ];

    const parsed = parsePortableText(raw);

    expect(parsed).toMatchInlineSnapshot(`
Array [
  Object {
    "_key": "08b36691aa6c",
    "_type": "block",
    "children": Array [
      Object {
        "_key": "2c01f20ff18d",
        "_type": "span",
        "marks": Array [],
        "text": "What is Lorem Ipsum?",
      },
    ],
    "kind": "text",
    "markDefs": Array [],
    "style": "h2",
  },
]
`);
  });
});
