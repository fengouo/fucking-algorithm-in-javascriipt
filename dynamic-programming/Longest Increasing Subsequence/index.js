/*
 * @Author: feng
 * @email: fengwang2018@gmail.com
 * @LastEditors: feng
 */

 /**
 * @params {Array} nums - The input numbers
*/
function lengthOfLIS(nums) {
    if(nums instanceof Array) {
        // Initilized dp Array with value 1
        let dp = new Array(nums.length);
        for(var i=0; i < nums.length; i++) {
            dp[i] = 1;
            for(var j = 0; j < i; j++) {
                if(nums[i] > nums[j]) {
                   dp[i] = dp[i] > (dp[j] + 1) ? dp[i] : dp[j] + 1;
                }
            }
        }
        let result = 1;
        for(var k = 0; k < dp.length; k++) {
            result = result > dp[k] ? result : dp[k]; 
        }
        return result;
    }
    return -1;
}

console.log('lengthOfLIS', lengthOfLIS([1, 19, 3, 2, 8, 99, 75, 20]));