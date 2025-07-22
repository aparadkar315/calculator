function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}


function selectOperation(num1, num2, operator){
    let answer = 0;
    switch(operator) {
        case "+":
            answer = add(num1, num2);
            break;
        case "-":
            answer = subtract(num1, num2);
            break;
        case "*":
            answer = multiply(num1, num2);
            break;
        case "/":
            answer = divide(num1, num2);
            break;
    }
    return answer;
}

const dis = document.querySelector(".display");
dis.textContent = "";
let prevInput;
let currentInput;
let operation;

function displayNum(e) {
    const dig = e.target.textContent;
    dis.textContent += dig;
}

function operatorClicked(e) {
    prevInput = dis.textContent;
    dis.textContent = "";
    operation = e.target.textContent;
}

function calculate(){
    currentInput = dis.textContent;
    const answer = selectOperation(parseInt(prevInput), parseInt(currentInput), operation);
    dis.textContent = answer;
}

//eventListener for digits
const digit = document.querySelector(".digit");
digit.addEventListener("click",displayNum);

//eventListener for operators
const ops = document.querySelectorAll(".operator");
ops.forEach((op) => {
    op.addEventListener("click",operatorClicked)
});

//eventListener for equal to
const calc = document.querySelector(".equals");
calc.addEventListener("click",calculate);
