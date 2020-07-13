 function capitalize(string) {
     if (typeof string !== "string") {
         return ""
     }
     return string.charAt(0).toUpperCase() + string.slice(1)
 }


 function reverseString(str) {
     if (typeof str == "string") {
         return str.split("").reverse().join("")
     } else {
         return "It is not a string";
     }
 }

 function randomNumber(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }


 module.exports = {
     reverseString,
     capitalize,
     randomNumber,
 }