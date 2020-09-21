let number= [ 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

let numbers = number.filter(function(num){
  return num > 15;
});

console.log(numbers)