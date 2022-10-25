/**
 * Author: Juliet Gemmell
 * Created: 10.24.2022
 * License: Public Domian
 **/

//The Function
 function sortUserName() {
   var userName = window.prompt("Please tell me your name");
   console.log("userName =", userName);

//Array being split
   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);

//Array being sorted
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);

//Array being put together
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);

   return nameSorted;
 }

//Print Script
document.writeln("I fixed your name: ", sortUserName(), "</br>");
