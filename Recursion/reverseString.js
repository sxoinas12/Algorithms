

function reverse(str){
	if(str.length === 0){
		return str;
	}
	return reverse(str.slice(1)) + str[0]
}

//reverse('awesome') --> 'emosewa'

let m = reverse('awesome');
console.log(`result is --> ${m}`)