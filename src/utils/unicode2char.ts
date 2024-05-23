export default function unicode2char(unicode: string) {
  if (typeof unicode !== 'string' || !unicode.startsWith('U+'))
    return

  return String.fromCodePoint(Number.parseInt(unicode.slice(2), 16))
}
