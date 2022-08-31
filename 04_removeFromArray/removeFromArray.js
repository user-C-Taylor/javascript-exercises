const removeFromArray = function(array) {
  const tempArray = array;
  let argLength = arguments.length;
  // arguments[0] is the array.
  for(let i = 1; i < argLength; i++){
    let index = tempArray.indexOf(arguments[i]);
    if(index !== -1){
    tempArray.splice(index,1);
    }
  }
  return tempArray;
};

// Do not edit below this line
module.exports = removeFromArray;
