

//solution one
function isSubsequence(sub,target){
	let counter = 0;
	let flag = true;
	let arr = target.split("")
	let desirePat = "";
	while(flag){
		let i = 0;
		for(i = 0; i<arr.length; i++){
			if(arr[i] === sub[counter]){
				desirePat += sub[counter];
				arr = arr.splice(i);
				counter++;
				break;
			}
		}
		if(i === arr.length){
			break;
		}
	}
	if(desirePat === sub){
		return true;
	}
	return false;
}


//solution two
function isSbusequnce2(str1,str2){
	var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
    	if (str2[j] === str1[i]) i++;
    	if (i === str1.length) return true;
    	j++;
  	}
  	return false;
}



let m = isSubsequence('hello' , 'hello world'); // experct true

console.log(m)