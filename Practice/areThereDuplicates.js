


function areThereDuplicates(){

	let dict = {}
	let duplicateFlag = false;
	Object.keys(arguments).map((key) => {
		if(dict[arguments[key]] === true){
			duplicateFlag = true;
			return;
		}
		dict[arguments[key]] = true;
	})

	return duplicateFlag;
}


areThereDuplicates("a","b","a");