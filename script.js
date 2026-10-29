const display = document.getElementById("display")

const equation = document.getElementById("equation")

function appendToDisplay (input){
    display.value += input;
}


function clearDisplay(){
    display.value =""
    equation.textContent =""


}
function calculate(){
   equation.textContent = display.value;
   display.value = math.evaluate(display.value) 
}
