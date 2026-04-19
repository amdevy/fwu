export const fmtPrice = (v: number) =>
  new Intl.NumberFormat('uk-UA').format(v) + ' ₴'
