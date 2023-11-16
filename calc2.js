document.addEventListener(`DOMContentLoaded`,function () {

   const display = document.getElementById(`inputt`);
   const buttons = document.querySelectorAll(`.btn`);
  
  let input = ``;

   buttons.forEach((button)=>{
       button.addEventListener(`click`,handleButtonClick)
   });

function handleButtonClick(event){
   const keyValue = event.target.dataset.key;

   if (keyValue == `=`) {
      
      result()
   }

  else if(keyValue == `c`){
      clear()
   }

   else if (keyValue == `d`){
      delet()
   }
   else{
      plusinput(keyValue)
   }
}
 
function plusinput(value) {
   if (value == `.` && input.includes(`.`)) {
      return;
   }
   input += value;
   updateDisplay()
}
function updateDisplay() {
   display.innerHTML = input; 
}
function clear() {
   input = ``;
   updateDisplay()
}
function delet() {
   input = display.innerHTML.slice(0,-1)
   updateDisplay()
}

function result() {
   const replaceOperator = display.innerText.replace(/%/g, "/100").replace(/X/g, "*").replace(/÷/g, "/");

   try {
       const result = eval(replaceOperator);
       input = result.toString();
       updateDisplay();
   } catch (error) {
      input =` <span class = stupid>stupid! input something valid</span>`;
       updateDisplay();
   };
   
}
// try {
//    const result = eval(replaceOperetors)
//    input = result;
//    updateDisplay()
// } catch (error) {
//    input =` error`;
//    updateDisplay()
// }

})