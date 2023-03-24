const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const stepNumbers= document.querySelectorAll(".step-number");
const stepProgression = document.querySelector("#stepProgression");

let currentStep=1;

update();

stepNumbers.forEach((step, i)=>{
 step.onclick = () => {
    currentStep= i + 1;
    update();
 }
});



function update(){
    prevBtn.disabled= false;
    nextBtn.disabled=false;


    stepNumbers.forEach((step, i)=>{
      if(currentStep => i){
        step.classList.add("active");
      }  else{
        step.classList.remove("active");
      }

    })
    stepProgression.style.width= ((currentStep -1)/(stepNumbers.length -1)) * 100 + "%"
}