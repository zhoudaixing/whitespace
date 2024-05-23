import type WhiteSpace from '@/components/WhiteSpace.vue'

interface WhitespaceItem {
  type: string
  name: string
  code: string
  el?: Ref<InstanceType<typeof WhiteSpace> | null>
}

const data: WhitespaceItem[] = [
  {
    type: 'unicode',
    name: 'Space',
    code: '\u0020',
  },
  {
    type: 'unicode',
    name: 'Tab',
    code: '\u0009',
  },
  {
    type: 'unicode',
    name: 'no-break space',
    code: '\u00A0',
  },
  {
    type: 'unicode',
    name: 'En Quad',
    code: '\u2000',
  },
  {
    type: 'unicode',
    name: 'Em Quad',
    code: '\u2001',
  },
  {
    type: 'unicode',
    name: 'En Space',
    code: '\u2002',
  },
  {
    type: 'unicode',
    name: 'Em Space',
    code: '\u2003',
  },
  {
    type: 'unicode',
    name: 'Three-Per-Em Space',
    code: '\u2004',
  },
  {
    type: 'unicode',
    name: 'Four-Per-Em Space',
    code: '\u2005',
  },
  {
    type: 'unicode',
    name: 'Six-Per-Em Space',
    code: '\u2006',
  },
  {
    type: 'unicode',
    name: 'Figure Space',
    code: '\u2007',
  },
  {
    type: 'unicode',
    name: 'Punctuation Space',
    code: '\u2008',
  },
  {
    type: 'unicode',
    name: 'Thin Space',
    code: '\u2009',
  },
  {
    type: 'unicode',
    name: 'Thin Non-Breaking Space',
    code: '\u200A',
  },
  {
    type: 'unicode',
    name: 'Thick Non-Breaking Space',
    code: '\u200B',
  },
  {
    type: 'unicode',
    name: 'zero width non-joiner',
    code: '\u200C',
  },
  {
    type: 'unicode',
    name: 'zero width joiner',
    code: '\u200D',
  },
  {
    type: 'unicode',
    name: 'Narrow No-Break Space',
    code: '\u202F',
  },
  {
    type: 'unicode',
    name: 'medium mathematical space',
    code: '\u205F',
  },
  {
    type: 'unicode',
    name: 'ideographic space',
    code: '\u3000',
  },
  {
    type: 'unicode',
    name: 'zero width no-break space',
    code: '\uFEFF',
  },
  {
    type: 'html',
    name: 'Tab',
    code: '&#9;',
  },
  {
    type: 'html',
    name: 'En Quad',
    code: '&#8192;',
  },
  {
    type: 'html',
    name: 'Em Quad',
    code: '&#8193;',
  },
  {
    type: 'html',
    name: 'En Space',
    code: '&#8194;',
  },
  {
    type: 'html',
    name: 'Em Space',
    code: '&#8195;',
  },
  {
    type: 'html',
    name: 'Three-Per-Em Space',
    code: '&#8196;',
  },
  {
    type: 'html',
    name: 'En Space',
    code: '&ensp;',
  },
  {
    type: 'html',
    name: 'Em Space',
    code: '&emsp;',
  },
  {
    type: 'html',
    name: 'very thin',
    code: '&VeryThinSpace;',
  },
  {
    type: 'html',
    name: 'hair',
    code: '&hairsp;',
  },
  {
    type: 'html',
    name: 'nb',
    code: '&nbsp;',
  },
  {
    type: 'html',
    name: 'thin',
    code: '&thinsp;',
  },
  {
    type: 'html',
    name: 'medium',
    code: '&mediumspace;',
  },
  {
    type: 'html',
    name: 'thick',
    code: '&thickspace;',
  },
  {
    type: 'html',
    name: 'Narrow No-Break Space',
    code: '&#8239;',
  },
  {
    type: 'html',
    name: 'medium mathematical space',
    code: '&#8287;',
  },
  {
    type: 'html',
    name: 'ideographic space',
    code: '&#12288;',
  },
  {
    type: 'html',
    name: 'zero width no-break space',
    code: '&#65279;',
  },

]

const list = [
  {
    name: 'Horizontal Tabulation',
    unicode: [
      'U+0009',
    ],
    htmlEntityName: [
      '&Tab;',
    ],
    htmlEntityDEC: [
      '&#9;',
    ],
    htmlEntityHEX: [
      '&#x0009;',
    ],
    abbr: 'HT',
  },
  {
    name: 'Space',
    unicode: [
      'U+0020',
    ],
    htmlEntityName: [],
    htmlEntityDEC: [
      '&#32;',
    ],
    htmlEntityHEX: [
      '&#x0020;',
    ],
    abbr: '',
  },
  {
    name: 'No-Break Space',
    unicode: [
      'U+00A0',
    ],
    htmlEntityName: [
      '&nbsp',
      '&nbsp;',
      '&NonBreakingSpace;',
    ],
    htmlEntityDEC: [
      '&#160;',
    ],
    htmlEntityHEX: [
      '&#x00A0;',
    ],
    abbr: 'NBSP',
  },
  {
    name: 'En Quad',
    unicode: [
      'U+2000',
    ],
    htmlEntityName: [],
    htmlEntityDEC: [
      '&#8192;',
    ],
    htmlEntityHEX: [
      '&#x2000;',
    ],
    abbr: 'NQSP',
  },
  {
    name: 'Em Quad',
    unicode: [
      'U+2001',
    ],
    htmlEntityName: [],
    htmlEntityDEC: [
      '&#8193;',
    ],
    htmlEntityHEX: [
      '&#x2001;',
    ],
    abbr: 'MQSP',
  },
  {
    name: 'En Space',
    unicode: [
      'U+2002',
    ],
    htmlEntityName: [
      '&ensp;',
    ],
    htmlEntityDEC: [
      '&#8194;',
    ],
    htmlEntityHEX: [
      '&#x2002;',
    ],
    abbr: 'ENSP',
  },
  {
    name: 'Em Space',
    unicode: [
      'U+2003',
    ],
    htmlEntityName: [
      '&emsp;',
    ],
    htmlEntityDEC: [
      '&#8195;',
    ],
    htmlEntityHEX: [
      '&#x2003;',
    ],
    abbr: 'EMSP',
  },
  {
    name: 'Three-Per-Em Space',
    unicode: [
      'U+2004',
    ],
    htmlEntityName: [
      '&emsp13;',
    ],
    htmlEntityDEC: [
      '&#8196;',
    ],
    htmlEntityHEX: [
      '&#x2004;',
    ],
    abbr: '3/MSP',
  },
  {
    name: 'Four-Per-Em Space',
    unicode: [
      'U+2005',
    ],
    htmlEntityName: [
      '&emsp14;',
    ],
    htmlEntityDEC: [
      '&#8197;',
    ],
    htmlEntityHEX: [
      '&#x2005;',
    ],
    abbr: '4/MSP',
  },
  {
    name: 'Six-Per-Em Space',
    unicode: [
      'U+2006',
    ],
    htmlEntityName: [],
    htmlEntityDEC: [
      '&#8198;',
    ],
    htmlEntityHEX: [
      '&#x2006;',
    ],
    abbr: '6/MSP',
  },
  {
    name: 'Figure Space',
    unicode: [
      'U+2007',
    ],
    htmlEntityName: [
      '&numsp;',
    ],
    htmlEntityDEC: [
      '&#8199;',
    ],
    htmlEntityHEX: [
      '&#x2007;',
    ],
    abbr: 'FSP',
  },
  {
    name: 'Punctuation Space',
    unicode: [
      'U+2008',
    ],
    htmlEntityName: [
      '&puncsp;',
    ],
    htmlEntityDEC: [
      '&#8200;',
    ],
    htmlEntityHEX: [
      '&#x2008;',
    ],
    abbr: 'PSP',
  },
  {
    name: 'Thin Space',
    unicode: [
      'U+2009',
    ],
    htmlEntityName: [
      '&thinsp;',
      '&ThinSpace;',
    ],
    htmlEntityDEC: [
      '&#8201;',
    ],
    htmlEntityHEX: [
      '&#x2009;',
    ],
    abbr: 'THSP',
  },
  {
    name: 'Hair Space',
    unicode: [
      'U+200A',
    ],
    htmlEntityName: [
      '&hairsp;',
      '&VeryThinSpace;',
      '&ThickSpace;',
    ],
    htmlEntityDEC: [
      '&#8202;',
    ],
    htmlEntityHEX: [
      '&#x200A;',
    ],
    abbr: 'HSP',
  },
  {
    name: 'Zero Width Space',
    unicode: [
      'U+200B',
    ],
    htmlEntityName: [
      '&NegativeMediumSpace;',
      '&NegativeTnickSpace;',
      '&NegativeThinSpace;',
      '&NegativVeryThinSpace;',
      '&ZeroWithSpace;',
    ],
    htmlEntityDEC: [
      '&#8203;',
    ],
    htmlEntityHEX: [
      '&#x200B;',
    ],
    abbr: 'ZWSP',
  },
  {
    name: 'Zero Width Non-Joiner',
    unicode: [
      'U+200C',
    ],
    htmlEntityName: [
      '&zwnj;',
    ],
    htmlEntityDEC: [
      '&#8204;',
    ],
    htmlEntityHEX: [
      '&#x200C;',
    ],
    abbr: 'ZWNJ',
  },
  {
    name: 'Zero Width Joiner',
    unicode: [
      'U+200D',
    ],
    htmlEntityName: [
      '&zwj;',
    ],
    htmlEntityDEC: [
      '&#8205;',
    ],
    htmlEntityHEX: [
      '&#x200D;',
    ],
    abbr: 'ZWJ',
  },
  {
    name: 'Narrow No-Break Space',
    unicode: [
      'U+202F',
    ],
    htmlEntityName: [],
    htmlEntityDEC: [
      '&#8239;',
    ],
    htmlEntityHEX: [
      '&#x202F;',
    ],
    abbr: 'NNBSP',
  },
  {
    name: 'Medium Mathematical Space',
    unicode: [
      'U+205F',
    ],
    htmlEntityName: [
      '&MediumSpace;',
      '&ThickSpace;',
    ],
    htmlEntityDEC: [
      '&#8287;',
    ],
    htmlEntityHEX: [
      '&#x205F;',
    ],
    abbr: 'MMSP',
  },
  {
    name: 'Word Joiner',
    unicode: [
      'U+2060',
    ],
    htmlEntityName: [
      '&NoBreak;',
    ],
    htmlEntityDEC: [
      '&#8288;',
    ],
    htmlEntityHEX: [
      '&#x2060;',
    ],
    abbr: 'WJ',
  },
  {
    name: 'Ideographic Space',
    unicode: [
      'U+3000',
    ],
    htmlEntityName: [],
    htmlEntityDEC: [
      '&#12288;',
    ],
    htmlEntityHEX: [
      '&#x3000;',
    ],
    abbr: 'IDSP',
  },
  {
    name: 'Zero Width No-Break Space',
    unicode: [
      'U+FEFF',
    ],
    htmlEntityName: [],
    htmlEntityDEC: [
      '&#65279;',
    ],
    htmlEntityHEX: [
      '&#xFEFF;',
    ],
    abbr: 'BOM',
  },
]
export { list }
export default data
