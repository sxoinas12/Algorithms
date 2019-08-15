
function isEven(num){
	return num % 2 == 0;
}

function nestedEvenSum(obj){

	let result = 0;
	function helper(obje){
		Object.keys(obje).map((key) => {
			if(isEven(obje[key])){
				result = result +obje[key]
			}

			else if(obje[key] instanceof Object){
				return helper(obje[key])
			}
		})
	}

	helper(obj);
	return result;

	
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}
var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

let num = nestedEvenSum(obj2)
console.log(num)