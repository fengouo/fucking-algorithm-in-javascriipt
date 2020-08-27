/*
 * @Author: your name
 * @Date: 2020-08-27 10:13:16
 * @LastEditTime: 2020-08-27 11:25:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /dynamic-programming/index.js
 */

/**
 * @param coins
 * @param amount 总金额
*/
function coinChange(coins, amount) {
    function dp(n){
        if(n == 0) return 0;
        if(n < 0) return -1;
        
        // Initalize the result the max int value
        let result = Number.MAX_VALUE;
        for(var coin of coins) {
            console.log('coins is', coins);
            console.log("coin is", coin);
            let sub = dp(n - coin);
            if (sub == -1) {
                continue;
            }
            result = result > 1 + sub ? 1 + sub : result;
        }
        return result;
    } 

    return dp(amount);
}


function coinChangeWithMemo(coins, amount) {
    let memo = {};
    function dp(n){
        if(memo[n] !== undefined) {
            return memo[n];
        }

        if(n == 0) return 0;
        if(n < 0) return -1;
        
        // Initalize the result the max int value
        let result = Number.MAX_VALUE;
        for(var coin of coins) {
            let sub = dp(n - coin);
            if (sub == -1) {
                continue;
            }
            result = result > 1 + sub ? 1 + sub : result;
        }
        memo[n] = result;
        return result;
    } 

    return dp(amount);
}

/**
 * @description dp[i] = x 表示，当目标金额为 i 时，至少需要 x 枚硬币。 
 * @params coins
 * @params amount 
 */
function coinChangeWithDpTable(coins, amount) {
    
    if(coins instanceof Array && amount > 0) {
        let dp = new Array(amount + 1);
        for(var i = 0; i < dp.length; i++) {
            dp[i] = amount + 1;
            dp[0] = 0;
            for(var coin of coins) {
                if(i - coin >= 0) {
                    dp[i] = dp[i] >= 1 + dp[i - coin] ? 1 + dp[i - coin] : dp[i];
                }
            }
        }
        return (dp[amount] == amount + 1) ? -1 : dp[amount];
    }
    return -1;
}