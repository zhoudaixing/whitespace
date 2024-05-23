// const fs = require('node:fs')
import fs from 'node:fs'

import _ from 'lodash'

function handle() {
  const res = []
  const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
  data.forEach((item) => {
    const name = item.name
    const abbr = _.trim(item['abbr '])
    const name_cn = item.name_cn
    const hex = _.padStart(item.unicode, 4, '0')
    const index = Number.parseInt(item.unicode, 16)
    res.push({
      name,
      abbr,
      name_cn,
      index,
      type: 'unicode',
      code: `U+${hex}`,
    })
    if (item.htmlentityname) {
      item.htmlentityname.split(' ').forEach((el) => {
        res.push({
          name,
          abbr,
          name_cn,
          index,
          type: 'htmlEntityName',
          code: `&${el}`,
        })
      })
    }
    res.push({
      name,
      abbr,
      name_cn,
      index,
      type: 'htmlEntityDEC',
      code: `&#${item.htmlentitydec};`,
    })
    res.push({
      name,
      abbr,
      name_cn,
      index,
      type: 'htmlEntityHEX',
      code: `&#x${hex};`,
    })
  })
  // const x = data.map((el) => {
  //   const obj = {}
  //   // obj.id = count++
  //   obj.name = el.name
  //   obj.name_cn = el.name_cn

  //   const hex = _.padStart(el.unicode, 4, '0')
  //   obj.index = Number.parseInt(hex, 16)
  //   obj.unicode = [`U+${hex}`]
  //   if (el.htmlentityname)
  //     obj.htmlEntityName = el.htmlentityname.split(' ').map(name => `&${name}`)
  //   else obj.htmlEntityName = []
  //   obj.htmlEntityDEC = [`&#${el.htmlentitydec};`]
  //   obj.htmlEntityHEX = [`&#x${hex};`]
  //   obj.abbr = _.trim(el['abbr '])
  //   return obj
  // })
  fs.writeFileSync('data1.json', JSON.stringify(res, null, 2))
  // console.log(data)
}

handle()
