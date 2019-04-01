'use strict';

const pirde  = (function(){

    const suojatut = new WeakMap();

    class Auto{
        constructor(tan, mittari) {
            this.tankki = tan;
            suojatut.set(this, {mittari: mittari});
        }

        aja(){
            --this.tankki;
            suojatut.set(this,{mittari:(++suojatut.get(this).mittari)});
        }
        getMittari() {return suojatut.get(this).mittari;}

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