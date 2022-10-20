/**
 * Author:    Juliet Gemmell
 * Created:   10.19.2022
 *
 * License: Public Domian
 **/

//Transportation Variables
 myTansportation = ["car", "bus", "feet"];

 myMainRide = {
   make: "Ford",
   model: "Hybrid Escape",
   color: "Light Green",
   year: 2008,
   Age: Function(){
     return 2022 - Age;
   }
 }

 //Print Script
 document.writeln("The Kinds of Transportation I use: ", myTansportation, "</br>");
 document.writeln("My Main Ride: <pre>",
     JSON.stringify(myMainRide, null, '\t'), "</pre>");
