


function stringifyNumbers(obj){
	let newObj = [];
	function helper(obje){
		Object.keys(obje).map((key) => {

			if (Array.isArray(obje[key]) || obje[key] === null || typeof obje[key] === "function" || typeof obje[key] === 'boolean') {
        		newObj[key] = obje[key];
      		} 
			else if(!isNaN(obje[key])){
				newObj[key] = obje[key].toString();
			}

			else if(obje[key] instanceof Object){
				return helper(obje[key])
			}else{
				newObj[key] = obje[key]
			}
		})
	}

	helper(obj);
	return newObj;




}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

let m = stringifyNumbers(obj)
console.log(m)