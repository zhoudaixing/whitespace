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

const list = {
  1: [
    {
      name: 'Em Quad',
      unicode: ['\u2001'],
      htmlEntityDEC: ['&#8193'],
    },
    {
      name: 'Em Space',
      unicode: ['\u2003'],
      htmlEntityName: ['&emsp;'],
      htmlEntityDEC: ['&#8195'],
    },
    {
      name: 'ideographic space',
      unicode: ['\u3000'],
      htmlEntityDEC: ['&#12288'],
    },

  ],
  2: [
    {
      name: 'En Quad',
      unicode: ['\u2000'],
      htmlEntityDEC: ['&#8192'],
    },
    {
      name: 'En Space',
      unicode: ['\u2002'],
      htmlEntityName: ['&ensp;'],
    },
  ],

}
export { list }
export default data
