

function flatten(arr){

	var newArr = []

	  	for(var i = 0; i < arr.length; i++){
    	if(Array.isArray(arr[i])){
      		newArr = newArr.concat(flatten(arr[i]))
    	} else {
      		newArr.push(arr[i])
    	}
  } 
  return newArr;
	


}


//let m = flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
//console.log(m)
let n = flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
console.log(n)
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3