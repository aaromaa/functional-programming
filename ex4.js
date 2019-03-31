var temps = [1,15,23,-12,96,13,53,-6,21,43,-5,7,9,35,-23,-455,1,646,8,54,29,-14,17,13];

var temp = temps.filter(x=> x >=0)
var result = temp.reduce((g,y) => g+y) / temp.length ;
console.log(result);