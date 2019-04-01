const Immutable = require('immutable');
const set1 = Immutable.Set(['punainen', 'vihreä', 'keltainen']);

const set2 = set1.add('ruskea');
console.log(set1 ===set1);
const set3 = set2.add('ruskea');
console.log(set2 === set3);