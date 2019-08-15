/*****  3sumClosest
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

///leet code example 16

**/


var threeSumClosest = function(nums,target){
	nums.sort();
	let result;
	let resultDiff;
	let temp;
	let f = 0;
	for(let j = 0; j<nums.length; j++){
		
		for(let i = j+1; i<nums.length; i++){
			for(let m = i+1; m < nums.length; m++){
				temp = nums[j] + nums[i] + nums[m];
				if(f === 0){
					result = temp;
					resultDiff = Math.abs(temp-target);
					f = 1;

				}
				let diff = Math.abs(temp - target);


				console.log(`Outputs are ${temp} With diff ${diff} with target ${target}`)
				if(diff >= 0 && diff < resultDiff ){
					result = temp;
					resultDiff = diff;
				}

			}
		}
	}
	
	console.log(resultDiff)
	return result;

	//[ -1 , -2, 3, 4 , 5]



}



let output = threeSumClosest([1,1,-1,-1,3],1)
//let output = threeSumClosest( [0,0,1,2,2,3,4,5],3)
console.log("######Output is ",output)