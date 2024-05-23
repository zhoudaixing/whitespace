/*
 * @Author: zhoudaixing
 * @Date: 2024-05-23
 * @LastEditors: zhoudaixing
 * @LastEditTime: 2024-05-23
 * @FilePath: /src/utils/flatData.ts
 * @Description:
 */
export function flatData(data) {
  const res = []
  let count = 0
  data.forEach((item) => {
    const name = item.name
    const abbr = item.abbr
    const name_zh = item.name_zh
    res.push({
      id: count++,
      name,
      abbr,
      name_zh,
      type: 'unicode',
      code: item.unicode[0],
    })
    item.htmlEntityName.forEach((el) => {
      res.push({
        id: count++,

        name,
        abbr,
        name_zh,
        type: 'htmlEntityName',
        code: el,
      })
    })
    res.push({
      id: count++,

      name,
      abbr,
      name_zh,
      type: 'htmlEntityDEC',
      code: item.htmlEntityDEC[0],
    })
    res.push({
      id: count++,

      name,
      abbr,
      name_zh,
      type: 'htmlEntityHEX',
      code: item.htmlEntityHEX[0],
    })
  })
  return res
}
