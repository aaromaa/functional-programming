function maki(k,lisa){
    return function(pituus){

            return (60 + ((pituus - k)*2));

    }
}

lahti = maki(50,2);
pituudet = [ 40,100,30,4,129384,500];

console.log( pituudet.map(lahti));