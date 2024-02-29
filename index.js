function palindrome(str){
//convert the string into an array using the string.split function

const str = string.split('');

//use reverse()method to reverse the array values
const revValue = str.reverse();

//use join() method to group the array values into the string

const d = revValue.join('');

if (str == d){
 document.getElementById("pa2").value = b + " is a Palindrome String";
}
else
document.getElementById("pa2").value = b + " is not a Palindrome String";
}