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
var adder = make_adder();

console.log(adder(4,4));
