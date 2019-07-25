


function maxSubarraySum(arr,len){
	let max = 0;
	let counter = 0 
	let wind = arr.slice(counter,len);
	if(len > arr.length) {
		return null;
	}
	while(counter < arr.length){
		let target = wind.reduce((accumulator,currentValue) => accumulator + currentValue)
		if(target > max){
			max = target;
		}
		counter++;
		wind = arr.slice(counter,len+counter)
	}

	return max;
}


let max = maxSubarraySum([100,200,300],2)
let mymax = maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)

console.log(max)

console.log(mymax)