function fib(num){
    if(num == 1 || num == 2){
        return 1;
    }
   
    return fib(num-1) + fib(num-2);
}


var m = fib(10);
console.log("####",m)