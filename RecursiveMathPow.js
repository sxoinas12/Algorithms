

function power(base,exponent){
  if(exponent === 0){
    return 1;
  }
  return base*power(base,exponent-1);
}

var m = power(2,0);
console.log(m);
