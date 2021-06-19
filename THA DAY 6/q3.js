var first = function(arr1 , x){
    if (arr1 == null) 
      return void 0;
    if (x == null) 
      return arr1[0];
    if (x < 0)
      return [];
    return arr1.slice(0, x);
  };

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));