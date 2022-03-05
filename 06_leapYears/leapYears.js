const leapYears = function(year) {
    if( divisibleBy(400,year) || 
        divisibleBy(4,year) && !divisibleBy(100,year))
    return true;
 return false
};

function divisibleBy(divisibleByNum, num){
    return num % divisibleByNum == 0;
}

// Do not edit below this line
module.exports = leapYears;
