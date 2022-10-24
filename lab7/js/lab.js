/**
 * Author: Juliet Gemmell
 * Created: 10.24.2022
 * License: Public Domian
 **/

//The Function
 function sortUserName() {
   var userName = window.prompt("Please tell me your name");
   console.log("userName =", userName);

   //FIrst makes lower case then splits and sorts the array, then joins together
   var nameSorted = userName.toLower().split("").sort().join("");
   console.log("nameSorted =", nameSorted);

   return nameSorted;
 }
