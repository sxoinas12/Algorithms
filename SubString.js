var NaiveSearch = function(long,short) {
	let counter = 0;
	for(var i = 0; i< long.length; i++){
		for(var j=0; j< short.length; j++){	
			if(short[j] !== long[i+j])break;
			if(j === short.length -1 )counter++;
		}
	}
	return counter;
}

let count = NaiveSearch("lorie loled",'lol')

console.log("Homw many times",count)