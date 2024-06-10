const d = document;

const inputBill = d.querySelector("#bill");
const buttons = d.querySelectorAll("input[type='button']");
const customPercent = d.querySelector("#custom-percent");
const numberPeople = d.querySelector("#number-people");
const tipPerson = d.querySelector("#tip-person");
const tipTotal = d.querySelector("#tip-total");
const resetBtn = d.querySelector("#reset");
const form = d.querySelector("form");
const errors = d.querySelectorAll(".error");

let percent = 0;
let customPercentValue = 0;
let bill = 0;
let number_people = 0;
let tipAmountPerPerson = 0;
let totalPerPerson = 0;
let valueBtn = "";

document.addEventListener("wheel", function(event){
    if(document.activeElement.type === "number"){
        document.activeElement.blur();
    }
});

inputBill.addEventListener("input", (e) => {
    console.log(inputBill.value)
    if(inputBill.value === "") {
        inputBill.classList.add("empty");
        errors[0].classList.remove("hide");
    } else {
        inputBill.classList.remove("empty")
        errors[0].classList.add("hide");
    }

    bill = Number(e.target.value);
    calculate();
})

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
    valueBtn = e.target.value;
    percent = Number(valueBtn.slice(0,-1)) / 100;
    activeBtn();
    calculate();
    }) 
});

customPercent.addEventListener("input", (e) => {
    if(e.target) {
     deactiveBtn();  
     percent = Number(e.target.value) / 100;
     calculate(); 
    }
})

numberPeople.addEventListener("input", (e) => {
    if(numberPeople.value === "") {
        numberPeople.classList.add("empty");
        errors[1].classList.remove("hide");
    } else {
        numberPeople.classList.remove("empty");
        errors[1].classList.add("hide");
    }
    number_people = Number(e.target.value);
    calculate();
})

function calculate() {

    if(bill !== 0 && percent !== 0 && number_people !== 0) {
        tipAmountPerPerson = (bill * percent / number_people);
        tipPerson.textContent = tipAmountPerPerson.toFixed(2);
        
        totalPerPerson = (bill / number_people) + tipAmountPerPerson;
        tipTotal.textContent = totalPerPerson.toFixed(2);
    } else {
        return;
    }
    reset();
}

function reset() {
    if(tipAmountPerPerson && totalPerPerson) {
        resetBtn.disabled = false;
    } else {
        resetBtn.disabled = true;
    }
}

function deactiveBtn() {
    buttons[0].classList.remove("active");
    buttons[1].classList.remove("active");
    buttons[2].classList.remove("active");
    buttons[3].classList.remove("active");
    buttons[4].classList.remove("active");
}

function activeBtn() {
    console.log("hola");
    console.log(buttons[0].value)

    if(valueBtn === buttons[0].value) {
        buttons[0].classList.add("active");
        buttons[1].classList.remove("active");
        buttons[2].classList.remove("active");
        buttons[3].classList.remove("active");
        buttons[4].classList.remove("active");
    }

    if(valueBtn === buttons[1].value) {
        buttons[1].classList.add("active");
        buttons[0].classList.remove("active");
        buttons[2].classList.remove("active");
        buttons[3].classList.remove("active");
        buttons[4].classList.remove("active");
    }

    if(valueBtn === buttons[2].value) {
        buttons[2].classList.add("active");
        buttons[1].classList.remove("active");
        buttons[0].classList.remove("active");
        buttons[3].classList.remove("active");
        buttons[4].classList.remove("active");
    }

    if(valueBtn === buttons[3].value) {
        buttons[3].classList.add("active");
        buttons[1].classList.remove("active");
        buttons[2].classList.remove("active");
        buttons[0].classList.remove("active");
        buttons[4].classList.remove("active");
    }

    if(valueBtn === buttons[4].value) {
        buttons[4].classList.add("active");
        buttons[1].classList.remove("active");
        buttons[2].classList.remove("active");
        buttons[3].classList.remove("active");
        buttons[0].classList.remove("active");
    }
}

form.addEventListener("reset", (e) => {
    deactiveBtn();
    bill = 0;
    percent = 0;
    number_people = 0;
    tipPerson.textContent = "0.00";
    tipTotal.textContent = "0.00";
    resetBtn.disabled = true;
})


