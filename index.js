 function capitalize(string) {
    if (typeof string !== 'string') {
        return ""
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
  }


function reverseString(str) {
   return str.split("").reverse().join("")
}

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}

module.exports = {
    reverseString,
    capitalize,
    randomNumber
}