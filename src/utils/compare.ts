enum CodeType {
  unicode,
  htmlEntityName,
  htmlEntityDEC,
  htmlEntityHEX,
}
export function compare(a, b) {
  if (a.hex === b.hex)
    return CodeType[a.type] - CodeType[b.type]
  return a.hex - b.hex
}
