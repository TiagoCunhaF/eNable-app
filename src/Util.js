Number.prototype.format = function(n, x) {
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`;
  return `R$ ${this.toFixed(Math.max(0, ~~n)).replace(
    new RegExp(re, 'g'),
    '$&,'
  )}`;
};
