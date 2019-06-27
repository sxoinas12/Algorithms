var factorial = function(num){
	if(num === 1){
		return num;
	}
	return num*factorial(num-1);
}


let m = factorial(3);

console.log("Number is : ",m)