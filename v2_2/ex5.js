const Immutable = require('immutable');
let all = Immutable.Seq([1,2,3,4,5,6,7,8,9]);
let result = all.filter(x => x%3===0).map(x=>x*2);
console.log(result);