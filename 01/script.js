const basket1Count =document.querySelector(".basket1 span");
const basket2Count = document.querySelector(".basket2 span");   
const rightArrow= document.querySelector(".right-arrow")
const leftArrow= document.querySelector(".left-arrow")

let totalApples=10;
let secondBasketApplesCount=0;
let firstBasketApplesCount=totalApples-secondBasketApplesCount;

basket1Count.innerText= firstBasketApplesCount;
basket2Count.innerText = secondBasketApplesCount;

rightArrow.addEventListener("click",()=>{
   if(firstBasketApplesCount>0) {
    secondBasketApplesCount++;
    firstBasketApplesCount--;
    basket1Count.innerText= firstBasketApplesCount;
    basket2Count.innerText = secondBasketApplesCount;
    }

})
leftArrow.addEventListener("click",()=>{
   if(firstBasketApplesCount>10){
    secondBasketApplesCount--;
    firstBasketApplesCount++;
    basket1Count.innerText= firstBasketApplesCount;
    basket2Count.innerText = secondBasketApplesCount;
   }
})
