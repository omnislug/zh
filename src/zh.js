const data = require('../data/data_map.json');

module.exports = { data: data, toSlug: (string) =>
  string.split('').map((n) => Object.keys(data).includes(n) ? (data[n] + "-") : n).join("").replace(/-+$/, "") };
