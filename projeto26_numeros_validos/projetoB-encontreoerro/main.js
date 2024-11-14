let numberInput = document.getElementById("numberInput");
let checkButton = document.getElementById("checkButton");
let outputDiv = document.getElementById("output");

checkButton.addEventListener("click", function() {
  let number = Number(numberInput.value);

  // correção
  if (number < 1 ){
    outputDiv.innerHTML = "Number is too small!";
  } else if (number > 10){
    outputDiv.innerHTML = "Number is too large!";
  } else {
    outputDiv.innerHTML = "Valid Number";
  }

  numberInput.value = ""
});
