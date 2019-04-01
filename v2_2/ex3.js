'use strict';
const Immutable = require('immutable');

const pirde  = (function(){

    const suojatut = new WeakMap();

    class Auto{
        constructor(tan, mittari) {
            this.tankki = tan;
            Immutable.Map({mittari: mittari});
        }

        aja(){
            --this.tankki;
            Immutable.set({mittari:(++Immutable.get(this).mittari)});
        }
        getMittari() {return Immutable.get(this).mittari;}

        getTankki() {return this.tankki}

    }

    return Auto;
})();

const pirssi = new pirde(50,1000);
console.log(pirssi.getMittari(),pirssi.getTankki());
pirssi.tankki++;
console.log(pirssi.getTankki());
pirssi.aja();
console.log(pirssi.getMittari(),pirssi.getTankki());