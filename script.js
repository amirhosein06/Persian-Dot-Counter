//words data
const singDots = ["ب", "ج", "خ", "ز", "ذ", "ض", "ظ", "ن", "ف", "غ","i","j"],
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

   preview.innerHTML = getPersianNumbers(count);
   preview.style.animation = "none";
   preview.style.animation = "animit both 1s";
});





//add persian number
var map =
[
"۰","۱","۲","۳","۴",
"۵","۶","۷","۸","۹"
];

function getPersianNumbers(str)
{
    var newStr = "";

    str = String(str);

    for(i=0; i<str.length; i++)
    {
        newStr += map[parseInt(str.charAt(i))];
    }

    return newStr;
}

window.onload = ()=>{
    preview.innerHTML = getPersianNumbers(preview.innerHTML);
}