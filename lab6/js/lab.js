/**
 * Author:    Juliet Gemmell
 * Created:   10.19.2022
 *
 * License: Public Domian
 **/

//Transportation Variables
 myTansportation = [ "car", "bus", "feet" ];

 myMainRide = {
   make: "Ford",
   model: "Hybrid Escape",
   color: "Light Green",
   year: 2008,
   age: function(){
     return 2022 - year;
   }
 }

 //Print Script
 document.writeln("Getting around: " myTransport);
 document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
