'use strict';

let f, g;
function foo() {
    let x =1;
    return {
        x: function (){
            return x;
        },
        kasvata: function (){
          return ++x;
        },
        vahenna: function(){
            return --x;
        },
    }
}
const mod = foo();
console.log('call to vahenna: ' + mod.vahenna());
console.log('call to kasvata: ' + mod.kasvata());
