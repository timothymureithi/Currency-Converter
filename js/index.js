//functionality for back and next button

const slidebtn = document.getElementById("slide");
const backbtn = document.getElementById("backBtn");
const nextbtn = document.getElementById("nextBtn");

const sliderImg = new Array(
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",

);

let i = 0;

nextbtn.onclick = function() {
   if (i < 3){
    slide.src = sliderImg[i+1];
    
    i++;

   } 
}

backbtn.onclick = function() {
    if (i > 0){
     slide.src = sliderImg[i+1];
     
     i--;
 
    } 
 }