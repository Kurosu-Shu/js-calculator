//display
const displayText = document.querySelector(".text");
const result = document.getElementById("result");

//button
const numberButtons = document.querySelectorAll(".number-btn");
const signButtons = document.querySelectorAll(".sign-btn");
const equalButton = document.getElementById("equalButton");
const deleteButton = document.getElementById("deleteButton");
const acButton = document.querySelector(".ac-btn");
const parenthesisButton = document.querySelector(".parenthesis");

let expression = "";
let isCloseBracket = false;
let displayUi = [];

//number button event
numberButtons.forEach(function (numberButton) {

    numberButton.addEventListener("click", function (event) {

        expression += event.target.value;
        displayUi.push(event.target.value);

        displayText.innerHTML = displayUiToString();
    });
});

//sign button event
signButtons.forEach(function (signButton) {

    signButton.addEventListener("click", function (event) {

        if (event.target.value == "division") {
            expression += "/";
            displayUi.push(`<i class="fa-solid fa-divide"></i>`);

        } else if (event.target.value == "multiply") {

            expression += "*";
            displayUi.push(`<i class="fa-solid fa-xmark"></i>`);


        } else if (event.target.value == "subtraction") {

            expression += "-";
            displayUi.push(`<i class="fa-solid fa-minus"></i>`);


        } else if (event.target.value == "addition") {

            expression += "+";
            displayUi.push(`<i class="fa-solid fa-plus"></i>`);

        } else if (event.target.value == "modulus") {

            expression += "%";
            displayUi.push(`<i class="fa-solid fa-percentage"></i>`);
        }

        displayText.innerHTML = displayUiToString();

    });
});

parenthesisButton.addEventListener("click", function () {
    if (!isCloseBracket) {
        expression += "(";
        displayUi.push("(");
        isCloseBracket = true;

        displayText.innerHTML = displayUiToString();
    } else {
        expression += ")";
        displayUi.push(")");
        isCloseBracket = false;

        displayText.innerHTML = displayUiToString();
    }
})

//equal button event
equalButton.addEventListener("click", function () {
    result.textContent = eval(expression);
})

//delete button event
deleteButton.addEventListener("click", function () {
    expression = expression.slice(0, expression.length - 1);
    displayUi.reverse();
    displayUi.shift();
    displayUi.reverse();

    displayText.innerHTML = displayUiToString();

});

// all clear button event
acButton.addEventListener("click", function () {

    //clear ui
    displayText.textContent = "0";
    result.textContent = "0";

    //clear value
    expression = "";
    displayUi = [];
});


function displayUiToString() {
    return displayUi.reduce(function (prev, display) {
        return prev += display;
    });
}

