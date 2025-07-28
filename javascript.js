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
    return parseFloat(answer.toFixed(2));
}

const dis = document.querySelector(".display");
dis.textContent = "";
let prevInput = "";
let currentInput = "";//stores the current input of a single or multiple digits
let operation ="";
let dig = "";//variable to accept a digit each time a button is pressed

function displayNum(e) {
    dis.textContent = "";
    currentInput = "";
    if (!dig.includes('.')) {
            if (e.target.textContent === "Backspace") {
            dig = dig.slice(0,dig.length - 1);
            } else {
            dig += e.target.textContent;
            }
    } else {
            if (e.target.textContent != ".") {
            if (e.target.textContent === "Backspace") {
            dig = dig.slice(0,dig.length - 1);
            } else {
            dig += e.target.textContent;
            }
            }
    }
    dis.textContent = dig;
    currentInput = dis.textContent;
    }



function operatorClicked(e) {
    
   
        if (operation != "") {
            if(dis.textContent === ""){
                dis.textContent = dis.textContent;
                operation = e.target.textContent;
            }else{
                dis.textContent  = selectOperation(parseFloat(prevInput), parseFloat(currentInput), operation);
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
        const answer = selectOperation(parseFloat(prevInput), parseFloat(currentInput), operation);
        dis.textContent = answer;
        operation = "";
        dig = "";
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

const dot = document.querySelector(".dot");
dot.addEventListener("click", displayNum);

const back = document.querySelector(".back");
back.addEventListener("click", displayNum);

dis.setAttribute("style", "fontSize: 20px;");
