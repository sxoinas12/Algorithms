
//accept a sorted array and must return unqieu values
function CountUniqueValues(arr) {
	var values = 0;
	var left = 0;
	var right = arr.length - 1;
	let obj = {};
	//do some process
	while(left <= right){
		if(!obj[arr[left]]){
			obj[arr[left]] = 1;
			values++;
		}
		if(!obj[arr[right]]){
			obj[arr[right]] = 1;
			values++;
		}
		left++;
		right--;
	}
	
	//
	return values;

}
var sum = Infinity;



CountUniqueValues([-2,-1,-1,0,1]);