const repeatString = function(string, n) {
  let repeated = '';
  if(n < 0){
    repeated = 'ERROR';
  } else if(string === ''){
    // Return below with repeated = ''.
  }else {
    for(let i = 0; i < n; i++){
      repeated += string;
    }
  }
  return repeated;
};

// Do not edit below this line
module.exports = repeatString;
