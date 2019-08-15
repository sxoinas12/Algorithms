// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
//#solution 1
function isPalindrome(str){
	function reverse(string){
		if(string.length === 0){
			return string;
		}
		return reverse(string.slice(1)) + string[0]
	}


	let palindrome = reverse(str);
	if(palindrome === str){
		return true;
	}
	return false;


  // add whatever parameters you deem necessary - good luck!
}


// solution #2

    function isPalindrome(str){
        if(str.length === 1) return true;
        if(str.length === 2) return str[0] === str[1];
        if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
        return false;
    }