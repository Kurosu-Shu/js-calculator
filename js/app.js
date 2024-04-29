const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

buttons.forEach(function (button) {
    const btnValue = button.value;
    console.log(btnValue);
})