var binarySearch = function(arr,num){
	let start = 0;
  let end = arr.length -1;
  
 
  while(start <= end)
    {



  	let middle = Math.floor((start + end) / 2);
    if(arr[middle] == num) return arr[middle];
         
    else if(arr[middle] < num) start = middle + 1;
       
    else if(arr[middle] > num) end = middle - 1;
       
    }
 
  return -1;	
}
// Time COmplextity Binary Search
// Worst O(logn)
// Best Case O(1)

let index = binarySearch([1,2,3,4,5],5);
console.log("Inex is ",index)
