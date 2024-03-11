const left=document.querySelector(".left");
const right=document.querySelector(".right");
const slider=document.querySelector(".slider")
const image=document.querySelectorAll(".dog")
const dot=document.querySelector(".dot");

var sliteNumber=1;


for(var i=0 ; i<image.length; i++){
  const div= document.createElement("div");
 div.classList.add("dots");
  dot.appendChild(div)
}

const button= document.querySelectorAll(".dots")
 button[0].style.backgroundColor="white";
const resetBg = ()=>{
 button.forEach((buttons)=>{
   buttons.style.backgroundColor="transparent";
 })
}

button.forEach((buttons,i)=>{
  buttons.addEventListener("click", ()=>{
    resetBg();
   slider.style.transform=`translateX(-${i*300}px)`;
    sliteNumber= i+1;
    buttons.style.backgroundColor="white";
  })
})


right.addEventListener("click", ()=>{
 if(sliteNumber<image.length){
    slider.style.transform=`translateX(-${sliteNumber * 300}px)`;
  sliteNumber ++;
 }else{
    slider.style.transform=`translateX(-0px)`;
  sliteNumber = 1;
 }
  resetBg();
  button[sliteNumber-1].style.backgroundColor="white";
});

left.addEventListener("click", ()=>{
  if(sliteNumber>1){
    slider.style.transform=`translateX(-${(sliteNumber-2) * 300}px)`;
  sliteNumber --;
  }else{
  slider.style.transform=`translateX(-${(image.length-1)*300}px)`;
  sliteNumber = image.length;
  }
 resetBg();
  button[sliteNumber-1].style.backgroundColor="white";
})

