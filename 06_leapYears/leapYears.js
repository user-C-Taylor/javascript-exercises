// check 
//   IF year is divisible by four and NOT divisible by 100
//     return true
//   IF year is divisible by 400
//     return true
//   ELSE
//     return false

const leapYears = function(year) {
  if(year % 4 === 0 && 
     year % 100 !== 0){
      return true;
  } else if(year % 400 === 0){
      return true;
  } else{
      return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
