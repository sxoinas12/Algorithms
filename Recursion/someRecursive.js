
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function isOdd(num) { if (num % 2 === 1){
	return true;
 }
 return false;
}




function someRecursive(arr,cb){
  // add whatever parameters you deem necessary - good luck!
   
  if(arr.length === 1){
  	return cb(arr[0])
   }else if(arr.length === 0){
  	return false;
  }
 	if(cb(arr[arr.length-1])){
 		return true;
 	}
  	arr.pop()
  	return someRecursive(arr,cb);
  	
  
}


//solution 2 

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}


//let flag = someRecursive([2,4], isOdd) // false
//let f2 =  someRecursive([1,2,3,4], isOdd) // tr
//let f3 =  someRecursive([4,6,8,9], isOdd) // true
let f4 =  someRecursive([4,6,8], isOdd) // false
//let f5 =  someRecursive([4,6,8], val => val > 10); // false


//console.log(f3)
console.log(f4)





