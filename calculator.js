let operatorType = null;
let runningTotal = null;
let numEnteredFloat;
let count = 0;
let includesDecimal;
let displayString;
let strIncludes;
let divideByZero = false;
let buttonState = 'clear';
let previousButtonState;
let calculatorState = 'fresh';
let previousCalculatorState;

window.onload = setButtons();

function setButtons() {
    document.getElementById("btnEquals").disabled = true;
    document.getElementById("btnBackspace").disabled = true;
    document.getElementById("btnOne").disabled = false;
    document.getElementById("btnTwo").disabled = false;
    document.getElementById("btnThree").disabled = false;
    document.getElementById("btnFour").disabled = false;
    document.getElementById("btnFive").disabled = false;
    document.getElementById("btnSix").disabled = false;
    document.getElementById("btnSeven").disabled = false;
    document.getElementById("btnEight").disabled = false;
    document.getElementById("btnNine").disabled = false;
    document.getElementById("btnZero").disabled = false;
    document.getElementById("btnDecimal").disabled = false;
    document.getElementById("btnAdd").disabled = true;
    document.getElementById("btnSubtract").disabled = true;
    document.getElementById("btnMultiply").disabled = true;
    document.getElementById("btnDivide").disabled = true;
}

function controlButtons() {
    console.log(previousCalculatorState);
    console.log(calculatorState);
    if (buttonState == 'clear') {
        document.getElementById("btnAdd").disabled = true;
        document.getElementById("btnSubtract").disabled = true;
        document.getElementById("btnMultiply").disabled = true;
        document.getElementById("btnDivide").disabled = true;
        document.getElementById("btnBackspace").disabled = true;
    }
    else if (buttonState == 'equals') {
        document.getElementById("btnEquals").disabled = true;
        document.getElementById("btnBackspace").disabled = true;
        document.getElementById("btnOne").disabled = true;
        document.getElementById("btnTwo").disabled = true;
        document.getElementById("btnThree").disabled = true;
        document.getElementById("btnFour").disabled = true;
        document.getElementById("btnFive").disabled = true;
        document.getElementById("btnSix").disabled = true;
        document.getElementById("btnSeven").disabled = true;
        document.getElementById("btnEight").disabled = true;
        document.getElementById("btnNine").disabled = true;
        document.getElementById("btnZero").disabled = true;
        document.getElementById("btnDecimal").disabled = true;
    }
    else if (buttonState == 'num') {
        document.getElementById("btnAdd").disabled = false;
        document.getElementById("btnSubtract").disabled = false;
        document.getElementById("btnMultiply").disabled = false;
        document.getElementById("btnDivide").disabled = false;
        document.getElementById("btnEquals").disabled = false;
        document.getElementById("btnBackspace").disabled = false;
        if (previousButtonState == 'clear') {
            document.getElementById("btnEquals").disabled = false;
        }
    }
    else {
        document.getElementById("btnBackspace").disabled = true;
        document.getElementById("btnAdd").disabled = true;
        document.getElementById("btnSubtract").disabled = true;
        document.getElementById("btnMultiply").disabled = true;
        document.getElementById("btnDivide").disabled = true;
        document.getElementById("btnEquals").disabled = true;
        document.getElementById("btnOne").disabled = false;
        document.getElementById("btnTwo").disabled = false;
        document.getElementById("btnThree").disabled = false;
        document.getElementById("btnFour").disabled = false;
        document.getElementById("btnFive").disabled = false;
        document.getElementById("btnSix").disabled = false;
        document.getElementById("btnSeven").disabled = false;
        document.getElementById("btnEight").disabled = false;
        document.getElementById("btnNine").disabled = false;
        document.getElementById("btnZero").disabled = false;
        document.getElementById("btnDecimal").disabled = false;
    }
    if (previousCalculatorState == 'fresh') {
        document.getElementById("btnEquals").disabled = true;
    }
}

function dividingByZero() {
    if (operatorType == 'division' && numEnteredFloat == 0) {
        divideByZero = true;
    }
    else {
        divideByZero = false;
    }  
}

function operate() {
    count++;
    if (operatorType == "addition") {
        runningTotal = runningTotal + numEnteredFloat;
    }
    else if (operatorType == 'subtraction') {
        if (count == 1) {
            runningTotal = numEnteredFloat;
        }
        else {
            runningTotal = runningTotal - numEnteredFloat;
        }
    }
    else if (operatorType == 'division') {
            if (count == 1) {
                runningTotal = numEnteredFloat;
            }
            else {
                runningTotal = runningTotal / numEnteredFloat;
            }
        }
        else if (operatorType == 'multiplication') {
            if (count == 1) {
                runningTotal = numEnteredFloat;
            }
            else {
                runningTotal = runningTotal * numEnteredFloat;
            }   
        }
}

function calculateTotal() {
    let numEntered = document.getElementById("display").innerText;
    calculatorState = 'operatorEntered';
    controlButtons();
    numEnteredFloat = parseFloat(numEntered);
    dividingByZero();
    if (divideByZero == true) {
        document.getElementById("display").innerText = 'you can\'t divide by zero';
    }
    else {
        clearScreen();
        operate();
    }
} 

function clearScreen() {
    document.getElementById("display").innerHTML = "&nbsp";
}

function showResult(result) {
    clearScreen();
    let resultFloat = parseFloat(result);
    console.log(textSize);
    if (Number.isInteger(resultFloat) === true) {
        document.getElementById("display").innerHTML = '&nbsp' + result;
    }
    else {
        document.getElementById("display").innerHTML = '&nbsp' + result;
    }
}

function buttonClick(btnText) {

    document.getElementById("display").innerText += btnText;
    previousButtonState = buttonState;
    buttonState = 'num';
    previousCalculatorState = calculatorState;
    //calculatorState = 'numberEntered';
    controlButtons();
}

function checkForDecimal() {
    displayString= document.getElementById("display").innerText;
    if (displayString.includes('.')) {
        includesDecimal = true;
    } else 
    {
        includesDecimal = false;
    }
    };

document.getElementById('btnOne').addEventListener("click", function() {buttonClick("1");});
document.getElementById('btnTwo').addEventListener("click", function() {buttonClick("2");});
document.getElementById('btnThree').addEventListener("click", function() {buttonClick("3");});
document.getElementById('btnFour').addEventListener("click", function() {buttonClick("4");});
document.getElementById('btnFive').addEventListener("click", function() {buttonClick("5");});
document.getElementById('btnSix').addEventListener("click", function() {buttonClick("6");});
document.getElementById('btnSeven').addEventListener("click", function() {buttonClick("7");});
document.getElementById('btnEight').addEventListener("click", function() {buttonClick("8");});
document.getElementById('btnNine').addEventListener("click", function() {buttonClick("9");});
document.getElementById('btnZero').addEventListener("click", function() {buttonClick("0");});

document.getElementById('btnBackspace').addEventListener("click", function() {
    buttonState = 'backspace';
    let displayNum = document.getElementById("display").innerText;
    console.log(displayNum.trim());
    if(displayNum.trim() != null && displayNum != '') {
        console.log('hey im not empty');
    }
    else {
        console.log('now im empty');
    }
    document.getElementById("display").innerText = displayNum.substr(0, displayNum.length-1);
    let newDisplayNum = document.getElementById("display").innerText;

    if (newDisplayNum.includes('.')) {
        document.getElementById("btnDecimal").disabled = true;
    }
    else {
        document.getElementById("btnDecimal").disabled = false;
    }
});

document.getElementById('btnDecimal').addEventListener("click", function() {
    buttonState = 'decimal';
    checkForDecimal();
    if (includesDecimal == false) {
        buttonClick(".");
        document.getElementById("btnDecimal").disabled = true;
    }
    else {
    }
    
});

document.getElementById('btnClear').addEventListener("click", function() {
    buttonState = 'clear';
    calculatorState = 'fresh';
    setButtons();
    document.getElementById("display").innerHTML = "&nbsp";
    runningTotal = 0;
    numEnteredFloat = 0;
    operatorType = null;
    count = 0;
});

document.getElementById('btnAdd').addEventListener("click", function() {
    buttonState = 'add';
    if (operatorType == null) {
        operatorType = "addition";
        calculateTotal();
    }
    else {
        calculateTotal();
        operatorType = "addition";
    }
});

document.getElementById('btnSubtract').addEventListener("click", function() {
    buttonState = 'subtract';
    if (operatorType == null) {
        operatorType = "subtraction";
        calculateTotal();
    }
    else {
        calculateTotal();
        operatorType = "subtraction";
    }
})

document.getElementById('btnMultiply').addEventListener("click", function() {
    buttonState = 'multiply';
    if (operatorType == null) {
        operatorType = "multiplication";
        calculateTotal();
    }
    else {
        calculateTotal();
        operatorType = "multiplication";
    }   
})

document.getElementById('btnDivide').addEventListener("click", function() {
    buttonState = 'divide';
    if (operatorType == null) {
        operatorType = "division";
        calculateTotal();
    }
    else {
        calculateTotal();
        operatorType = "division";
    }    
})

document.getElementById('btnEquals').addEventListener("click", function() {
    buttonState = 'equals';
    if (operatorType == 'equals') {
    }
    else {
        let numEntered = document.getElementById("display").innerText;
        numEnteredFloat = parseFloat(numEntered);
        dividingByZero();
        if (divideByZero === true) {
            document.getElementById("display").innerText = 'you can\'t divide by zero';
        }
        else {
            calculateTotal();
            operatorType = "equals";
            showResult(runningTotal);
        }   
    }
})
