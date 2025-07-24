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
            if(num2 === 0){
            const errmsg = "Sorry! Can't divide by '0'";
            return errmsg;
            }
            answer = divide(num1, num2);
            break;
    }
    const roundedAnswer = parseFloat(answer.toFixed(2));
    return roundedAnswer;
}

const dis = document.querySelector(".display");
dis.textContent = "";
let prevInput = "";
let currentInput = "";//stores the current input of a single or multiple digits
let operation ="";
let dig = "";//variable to accept a digit each time a button is pressed

function displayNum(e) {
    currentInput = "";
    dig += e.target.textContent;
    dis.textContent = dig;
    currentInput = dis.textContent;
    }

function operatorClicked(e) {
    
   
        if (operation != "") {
            if(dis.textContent === ""){
                dis.textContent = dis.textContent;
                operation = e.target.textContent;
            }else{
                dis.textContent  = selectOperation(parseInt(prevInput), parseInt(currentInput), operation);
                prevInput = dis.textContent;
                operation = e.target.textContent;
                if (operation === "+" || operation === "-") {
                    currentInput = 0;
                } else {
                    currentInput = 1;
                }
                dig = "";
            }
        } else {
        operation = e.target.textContent;
        prevInput = dis.textContent;
        dis.textContent = "";
        dig = "";
        }
    }
    


function calculate() {
    if (dig === "" || operation === ""){
        dis.textContent = dis.textContent;
    } else {
        const answer = selectOperation(parseInt(prevInput), parseInt(currentInput), operation);
        dis.textContent = answer;
        operation = "";
        }
    
}

function clearDisplay() {
    dis.textContent = "";
    prevInput = "";
    currentInput = "";
    operation = "";
    dig = "";
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

//eventListener for clear
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearDisplay);
