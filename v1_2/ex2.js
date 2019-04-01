function make_adder(){
    return function(first,sec){
        if(first>sec){
            return 1;
        }
        else if(first<sec){
            return -1;
        }
        else return 0;
    };
}
var temps15 = [1,5,3,88,0];
var temps16 = [3,2,3,100,2];

function temps(adder,temps1,temps2){
    for(var i =0;i < temps1.length;i++){
        console.log(temps1[i],temps2[i],adder(temps1[i],temps2[i]));

    }
}
temps(make_adder(),temps15,temps16);