/**
 * Author: Juliet Gemmell
 * Created: 10.26.2022
 * License: Public Domian
 **/

 function iseven(x){
   return (x % 2 == 0);
 }

//testing
 console.log("is 3 even? ", iseven(3));
 console.log("is 4 even? ", iseven(4));

 //array
 array = [1, 2, 3, 4, 5, 6, 7, 8]
 console.log("my array: ", array)

 var result = array.map(iseven);
 console.log("testing the evenness ", result);

 var result = array.map(function(x){
    return x ** 0.5;
})
console.log("returns the squareroot of array: ", result);
