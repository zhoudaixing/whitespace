// const fs = require('node:fs')
import fs from 'node:fs'

import _ from 'lodash'

function handle() {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
  const x = data.map((el) => {
    const obj = {}
    obj.name = el.name
    obj.name_zh = el.name_zh

    const hex = _.padStart(el.unicode, 4, '0')
    obj.unicode = [`U+${hex}`]
    if (el.htmlentityname)
      obj.htmlEntityName = el.htmlentityname.split(' ').map(name => `&${name}`)
    else obj.htmlEntityName = []
    obj.htmlEntityDEC = [`&#${el.htmlentitydec};`]
    obj.htmlEntityHEX = [`&#x${hex};`]
    obj.abbr = _.trim(el['abbr '])
    return obj
  })
  fs.writeFileSync('data1.json', JSON.stringify(x, null, 2))
  // console.log(data)
}

handle()
