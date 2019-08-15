function collectOddValues(arr){
	
	let newArr = [];

	if(arr.length === 0){
		return newArr;
	}

	if(arr[0] % 2 !==0){
		newArr.push(arr[0])
	}
	
	//arr.slice (1) remove first element``
	newArr = newArr.concat(collectOddValues(arr.slice(1)))
	return newArr;
}


let m = collectOddValues([1,2,3,4,5])
console.log(m)