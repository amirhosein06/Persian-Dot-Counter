
//add persian number
var replaceDigits = function() {
    var map = ["&\#1776;","&\#1777;","&\#1778;","&\#1779;","&\#1780;","&\#1781;","&\#1782;","&\#1783;","&\#1784;","&\#1785;"]
    document.body.innerHTML = document.body.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function($0) { return map[$0]});
}
window.onload = replaceDigits;

//words data
const singDots = ["ب", "ج", "خ", "ز", "ذ", "ض", "ظ", "ن", "ف", "غ"],
trieDots = ["پ", "چ", "ژ", "ش", "ث"],
doublDots = ["ت", "ق"],
noDot = ["ی"];

//document element
const dotinput = document.querySelector(".counter_box input"),
preview = document.querySelector(".preview");
