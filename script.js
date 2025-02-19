const form = document.getElementById("rentalForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const carType = document.getElementById("carType");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const totalCost = document.getElementById("totalCost");

/// error messages

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const carTypeError = document.getElementById("carTypeError");
const startDateError = document.getElementById("startDateError");
const endDateError = document.getElementById("endDateError");

// ACTIONS

// name test
function isValidForm() {
  let isValid = true;

  const isValidName = () =>
    name.value.split(/\s+/).reduce((res, w) => res && w.length >= 3) &&
    name.value.split(" ").length >= 2;

  if (!isValidName()) {
    nameError.classList.remove("hidden");
    isValid = false;
  } else nameError.classList.add("hidden");

  // email test

  const isValidEmail = () =>
    !email.value.startsWith("@") &&
    email.value.includes("@") &&
    email.value.includes(".", email.value.indexOf("@")) &&
    !email.value.endsWith(".");

  if (!isValidEmail()) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else emailError.classList.add("hidden");

  // phone test

  const isValidPhone = () => {
    const trimedPhone = phone.value.trim().split(" ").join("");
    const isNotNumber = isNaN(trimedPhone);
    return !isNotNumber && trimedPhone.length == 8;
  };
  if (!isValidPhone()) {
    phoneError.classList.remove("hidden");
    isValid = false;
  } else {
    phoneError.classList.add("hidden");
  }

  if (carType.value == "") {
    carTypeError.classList.remove("hidden");
    isValid = false;
  } else carTypeError.classList.add("hidden");

  // start date test
  const isValidDateS = () =>
    startDate.value != "" &&
    Math.floor(new Date(startDate.value) / (1000 * 60 * 60 * 24)) >=
      Math.floor(new Date() / (1000 * 60 * 60 * 24));
  if (!isValidDateS()) {
    startDateError.classList.remove("hidden");
    isValid = false;
  } else startDateError.classList.add("hidden");

  // end date

  const isValidDateE = () =>
    endDate.value != "" && new Date(endDate.value) >= new Date(startDate.value);
  if (!isValidDateE()) {
    endDateError.classList.remove("hidden");
    isValid = false;
  } else endDateError.classList.add("hidden");

  // calculate prices

  const totalCost1 =
    (Math.floor(new Date(endDate.value) / (1000 * 60 * 60 * 24)) -
      Math.floor(new Date(startDate.value) / (1000 * 60 * 60 * 24))) *
    carType.value;

  if (isValid) {
    totalCost.value = totalCost1 + " TND";
  } else totalCost.value = "0 TND";

  // last return
  return isValid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = isValidForm();
});
