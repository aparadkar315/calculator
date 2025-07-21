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

let number1, number2, operator;

function operate(num1, num2, operator){
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

function display(e) {
const num = e.target.textContent;
dis.textContent += num;    
}

const digit = document.querySelector(".digit");
digit.addEventListener("click",display)