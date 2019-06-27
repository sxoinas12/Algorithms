function product(arr){
	if(arr.length === 1){
		return arr[0];
	}
	console.log(arr)
	return arr[0]*product(arr.slice(1));
}



let m = product([1,2,3,10])


console.log(m)