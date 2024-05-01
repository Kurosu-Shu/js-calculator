//display
const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");
const operator = document.getElementById("operator");
const result = document.getElementById("result");

//button
const numberButtons = document.querySelectorAll(".number-btn");
const signButtons = document.querySelectorAll(".sign-btn");
const equalButton = document.getElementById("equalButton");
const deleteButton = document.getElementById("deleteButton");
const acButton = document.querySelector(".ac-btn");

//user input
let numOneDigit = "";
let numTwoDigit = "";
let sign;
let expression = "";
let hasOperator = false;
let canDeleteOperator = false;

//number button event
numberButtons.forEach(function (numberButton) {

    numberButton.addEventListener("click", function (event) {

        if (!hasOperator) {

            numOneDigit += event.target.value;
            expression += event.target.value;
            numOne.textContent = numOneDigit;

        } else {

            numTwoDigit += event.target.value;
            expression += event.target.value;
            numTwo.textContent = numTwoDigit;
            canDeleteOperator = false;

        }

    });
});

//sign button event
signButtons.forEach(function (signButton) {

    signButton.addEventListener("click", function (event) {

        hasOperator = true;
        canDeleteOperator = true;

        if (event.target.value == "division") {

            operator.innerHTML = `<i class="fa-solid fa-divide"></i>`;
            sign = " /";

        } else if (event.target.value == "multiply") {

            operator.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
            sign = " *";

        } else if (event.target.value == "subtraction") {

            operator.innerHTML = `<i class="fa-solid fa-minus"></i>`;
            sign = " -";

        } else if (event.target.value == "addition") {

            operator.innerHTML = `<i class="fa-solid fa-plus"></i>`;
            sign = " +";
            expression += "+";

        } else if (event.target.value == "modulus") {

            operator.innerHTML = `<i class="fa-solid fa-percent"></i>`;
            sign = " %";
        }

    });
});

//equal button event
equalButton.addEventListener("click", function () {
    result.textContent = eval(numOneDigit + sign + numTwoDigit);
})

//delete button event
deleteButton.addEventListener("click", function () {

    if (!hasOperator && !canDeleteOperator) {

        numOneDigit = numOneDigit.slice(0, numOneDigit.length - 1);
        numOne.textContent = numOneDigit;

    } else if (canDeleteOperator) {

        sign = "";
        operator.textContent = "";
        canDeleteOperator = false;
        hasOperator = false;

    } else if (!canDeleteOperator) {

        numTwoDigit = numTwoDigit.slice(0, numTwoDigit.length - 1);
        numTwo.textContent = numTwoDigit;

        if (numTwoDigit.length == 0) {
            canDeleteOperator = true;
        }
    }

});

// all clear button event
acButton.addEventListener("click", function () {

    //clear ui
    numOne.textContent = 0;
    operator.textContent = "";
    numTwo.textContent = "";
    result.textContent = 0;

    //clear value
    numOneDigit = "";
    numTwoDigit = "";
    sign = "";
    hasOperator = false;
    canDeleteOperator = false;
});


