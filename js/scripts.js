
var string = prompt("Please enter a sentence:");

var firstLetterGrabber = function(string) {
	var fL = string.charAt(0).toUpperCase();
	var lL = string.slice(-1).toUpperCase();
  alert(string);
  alert(fL);
  alert(lL);
  alert(fL + lL);
  alert(lL + fL);
  var letters = [fL, lL, "hey"];
  return letters
}

var lastLetterGrabber = function(string) {
	var lL = string.slice(-1).toUpperCase();
  return lL;
}

var firstLetter = firstLetterGrabber(string)[0];
var lastLetter = firstLetterGrabber(string)[1];
var lastLetter = firstLetterGrabber(string)[2];
var bothLetters = firstLetter.concat(lastLetter);
var reverse = lastLetter + firstLetter;
var bullshit = string + reverse;
/* var next = string.length */

alert(bullshit);
alert(next);


// var galToL = function(gal) {
//   return gal * 3.785;
// };
//
// var gramToOz = function(gram) {
//   return gram / 28;
// };
//
// var tbToTs = function(tb) {
//   return tb * 3;
// };
//
// var tsToMl = function(ts) {
//   return ts * 5;
// };
//
// var gal = parseInt(prompt("How many gallons do you have?"));
// var gram = parseInt(prompt("How many grams do you have?"));
// var tb = parseInt(prompt("How many tablespoons do you have?"));
// var ts = parseInt(prompt("How many teaspoons do you have?"));
//
// var resultL = galToL(gal);
// alert(resultL);
//
// var resultOz = gramToOz(gram);
// alert(resultOz);
//
// var resultTs = tbToTs(tb);
// alert(resultTs);
//
// var resultMl = tsToMl(ts);
// alert(resultMl);
