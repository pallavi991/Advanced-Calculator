const button = document.querySelectorAll("button");
const result = document.getElementById("result");

for(let i =0; i<button.length; i++){
button[i].addEventListener("click", () =>
{
const buttonValue = button[i].textContent;
if(buttonValue === "C")
{
  clearResult();
}
else if(buttonValue === "=")
{
  calculateResult();
}
else 
{
  appendValue(buttonValue);
}
});
}

function clearResult()
{
  result.value="";
}

function calculateResult()
{
    try {
        result.value = eval(result.value);
    } catch (error) 
    {
        result.value = 'Error';
    }
}


function appendValue(buttonValue)
{
    result.value = result.value + buttonValue;
}

function  deleteLastValue(){
    result.value = result.value.slice(0,-1);
}


