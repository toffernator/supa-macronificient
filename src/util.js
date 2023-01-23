export function toCapatilized(s) {
  if (!s) {
    return
  }

  s = s.toUpperCase()
  return s.charAt(0) + s.substr(1).toLowerCase()
}
