


function sameFrequency(a,b){

	var digits_a = (""+a).split("");
	var digits_b = (""+b).split("");
	a_sorted = digits_a.sort();
	b_sorted = digits_b.sort();
	if(a_sorted.length !== b_sorted.length){
		return false;
	}
	 return JSON.stringify(a_sorted)==JSON.stringify(b_sorted);
	
}


let  a  = sameFrequency(123,321);

console.log(a)