/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

// Approch - 1

// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i]+nums[j]===target){
//                 return [i,j];
//             }
//         }
//     }
//     return "Not found";
// }

// const nums = [2,7,11,15];

// console.log(twoSum(nums,9));

// Approch - 2

var twoSum = function(nums,target){
  const obj = {};

  for(let i=0; i<nums.length; i++){

    key = target - nums[i];

    if(key in obj){
      return [obj[key],i];
    }

    obj[nums[i]] = i;
  }
  return "Not found";
}

const arr = [2,5,7,11,15];

console.log(twoSum(arr,9));