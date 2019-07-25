

//arr must be sorted
function averagePair(arr,avg){
 let left = 0;
    let right = arr.length - 1;
    //we have a sorted array as input
    while(left < right){
    	let average = (arr[left] + arr[right])/2;
    	if( average === avg){
    		return true;
    	}else if(average < avg ){
    		left++;
    	}else{
    		right--;
    	}

    }
    return false;

}



let arr = [1,2,3]


let m = averagePair(arr,2.5);




console.log(m)