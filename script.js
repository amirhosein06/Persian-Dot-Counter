//words data
const singDots = ["ب", "ج", "خ", "ز", "ذ", "ض", "ظ", "ن", "ف", "غ"],
trieDots = ["پ", "چ", "ژ", "ش", "ث"],
doublDots = ["ت", "ق"],
noDot = ["ی"];

//document element
const dotinput = document.querySelector(".counter_box input");
const preview = document.querySelector(".preview");

//counter
dotinput.addEventListener("input",(e)=>{
   const inputval = e.target.value,
   valuesplit = inputval.split("");
   var count = 0;
   
   valuesplit.forEach((item,index) => {
     if (singDots.includes(item)) {
        count += 1;
     };
     if (doublDots.includes(item)) {
        count += 2;
     };
     if (trieDots.includes(item)) {
        count += 3;
     };
     if (noDot.includes(item) && valuesplit.length > 1 && index !== (valuesplit.length -1)) {
        count += 2;
     };
   });

   preview.innerHTML = count;
});





//add persian number
// function replaceDigits() {
//     var map = ["&\#1776;","&\#1777;","&\#1778;","&\#1779;","&\#1780;","&\#1781;","&\#1782;","&\#1783;","&\#1784;","&\#1785;"]
//     document.body.innerHTML = document.body.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function($0) { return map[$0]});
// };
// window.onload = replaceDigits;