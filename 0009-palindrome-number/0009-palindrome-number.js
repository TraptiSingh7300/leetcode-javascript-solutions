/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    let newNum = x;
    let r, sum = 0;
    while(newNum !== 0){
        r = newNum % 10;
        sum = sum*10 + r;
        newNum = Math.trunc(newNum / 10);
    }
    return (x === sum);
};


console.log(isPalindrome(-121));