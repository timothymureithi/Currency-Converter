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

 /*Currency COnverter*/
 /*Declaring variables*/

 const currency1 = document.getElementById("currency-1")
 const currency2 = document.getElementById("currency-2")
 const amount1 = document.getElementById('amount-one')
 const amount2 = document.getElementById('amount-two')
 const Convrate = document.getElementById('rate')
 const swapbutton = document.getElementById('swap')

 /*Define an change event listeners. */
 currency1.addEventListener('change', calculate);
 currency2.addEventListener('change', calculate);
 amount1.addEventListener('input', calculate );
 amount2.addEventListener('input', calculate)

 //fetch currency rates
 function calculate(){
    const currency_1 = currency1.value;
    const currency_2 = currency2.value; 

    fetch(`https://v6.exchangerate-api.com/v6/c50c0dd18c871c23de59c4e4/latest/${currency_1}`)
    .then(response => response.json())
    .then((data) => {
        //  console.log(data);
        const rate = data.conversion_rates[currency_2];
        Convrate.innerText = `0 ${currency_1} = ${rate} ${currency_2}`;
        amount2.value = (amount1.value * rate).toFixed(2);

    });
 }

 swap.addEventListener('click', () => {
    const tempVar = currency1.value;
    currency1.value = currency2.value;
    currency2.value = tempVar;
    calculate();

 })

