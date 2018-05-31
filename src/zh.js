const data = require('../data/data_map.json');

module.exports = { data: data, toSlug: (string) =>
  string.split('').map((n, i, a) => {
    return (Object.keys(data).includes(n) ? (data[n] + '-') :
      n + (i > 0 && i < a.length - 1 &&
      Object.keys(data).includes(a[i + 1]) ? '-' : ''));
  }).join('').replace(/-+$/, '')
}
