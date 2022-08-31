const sumAll = function(a, b) {
  if(typeof a !== 'number' || 
     typeof b !== 'number' ||
     a < 0 ||
     b < 0){
    return 'ERROR';
  }

  let low = 0;
  let stop = 0;
  let sum = 0;
  if(a <= b){
    low = a;
    stop = b + 1;
  } else{
    low = b;
    stop = a + 1;
  }
  for(let i = low; i < stop; i++){
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
