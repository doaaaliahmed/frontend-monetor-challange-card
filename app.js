"use strict";
const confirmBtn = document.querySelector(".submit-btn");
const creditNumber = document.querySelector("#cardNumber");
const creditName = document.querySelector("#name");
const creditDateMonth = document.querySelector("#month");
const creditDateYear = document.querySelector("#year");
const creditCVC = document.querySelector("#cvc");
const numbers = "0123456789";

const userName = document.querySelector(".credit_Name");
const userNumber = document.querySelector(".front_card_number");
const userDateMonth = document.querySelector(".credit_month");
const userDateYear = document.querySelector(".credit_year");
const userCVC = document.querySelector(".back_card_num");

const error = document.querySelectorAll(".error");

const completeMsg = document.querySelector(".confirmed_message");
const formContainer = document.querySelector(".form_container");

let validName = false,
  validNumber = false,
  validDateMonth = false,
  validDateYear = false,
  validCVC = false;

const errorMsg = (errorIdx) => {
  error[errorIdx].style.opacity = "1";
  error[errorIdx].style.transform = "translateY(0%)";
};

const removeErrorMsg = (errorIdx) => {
  error[errorIdx].style.opacity = "0";
  error[errorIdx].style.transform = "translateY(-100%)";
};

const helperFunc = (el) => {
  return el.split("").every((e) => numbers.includes(e));
};

const completeForm = () => {
  if (creditName.value.includes(" ") && !helperFunc(creditName.value)) {
    validName = true;
    removeErrorMsg(0);
  } else {
    validName;
    errorMsg(0);
  }

  if (
    creditNumber.value.trim().length === 16 &&
    helperFunc(creditNumber.value)
  ) {
    validNumber = true;
    removeErrorMsg(1);
  } else {
    validNumber;
    errorMsg(1);
  }

  if (+creditDateMonth.value > 0 && +creditDateMonth.value <= 31) {
    validDateMonth = true;
    removeErrorMsg(2);
  } else {
    validDateMonth;
    errorMsg(2);
  }

  if (creditDateYear.value.length === 4 && helperFunc(creditDateYear.value)) {
    validDateYear = true;
    removeErrorMsg(2);
  } else {
    validDateYear;
    errorMsg(2);
  }

  if (+creditCVC.value.length === 3 && helperFunc(creditCVC.value)) {
    validCVC = true;
    removeErrorMsg(3);
  } else {
    validCVC;
    errorMsg(3);
  }

  return {
    name: validName,
    number: validNumber,
    month: validDateMonth,
    year: validDateYear,
    cvc: validCVC,
  };
};

confirmBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (Object.values(completeForm()).every((e) => e === true)) {
    userName.textContent = creditName.value
      .split(" ")
      .map((e) => e[0].toUpperCase() + e.slice(1))
      .join(" ");
    userNumber.textContent = `${creditNumber.value.slice(
      0,
      4
    )} ${creditNumber.value.slice(4, 8)} ${creditNumber.value.slice(
      8,
      12
    )} ${creditNumber.value.slice(12)} `;
    userDateMonth.textContent = creditDateMonth.value;
    userDateYear.textContent = creditDateYear.value.slice(2);
    userCVC.textContent = creditCVC.value;

    // complete message displayed when all input form is right;
    formContainer.classList.add("hidden");
    completeMsg.classList.remove("hidden");
  } else {
    return;
  }
});

document.querySelector(".continue-btn").addEventListener("click", function () {
  formContainer.classList.remove("hidden");
  completeMsg.classList.add("hidden");
  creditName.value =
    creditNumber.value =
    creditDateMonth.value =
    creditDateYear.value =
    creditCVC.value =
      "";


  userName.textContent = 'Jane Appleseed';
  userNumber.textContent = '0000 0000 0000 0000';
  userDateMonth.textContent = '00';
  userDateYear.textContent = '00';
  userCVC.textContent = '000'

  // complete message displayed when all input form is
});
