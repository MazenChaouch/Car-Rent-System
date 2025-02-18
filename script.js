const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

document.addEventListener("DOMContentLoaded", displayReservations);

const form = document.getElementById("rentalForm");
const table = document.getElementById("reservationTable");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const carType = document.getElementById("carType");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const totalCost = document.getElementById("totalCost");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const carTypeError = document.getElementById("carTypeError");
const startDateError = document.getElementById("startDateError");
const endDateError = document.getElementById("endDateError");

let editIndex = -1;

function displayReservations() {
  table.innerHTML = "";
  reservations.forEach((reservation, index) => {
    const row = table.insertRow();
    row.classList.add(
      "bg-gray-100",
      "text-gray-700",
      "text-center",
      "divide-x",
      "divide-orange-300",
    );
    row.innerHTML = `
            <td class="p-2">${reservation.name}</td>
            <td>${reservation.email}</td>
            <td>${reservation.phone}</td>
            <td>${
              reservation.carType == "50"
                ? "Ecomony"
                : reservation.carType == "70"
                ? "Standard"
                : "luxury"
            }</td>
            <td>${reservation.startDate}</td>
            <td>${reservation.endDate}</td>
            <td>${reservation.totalCost}</td>
            <td>
              <button onclick="updateReservation(${index})" class="bg-sky-400 text-white text-sm px-3 py-0.5 rounded">Edit</button>
              <button onclick="deleteReservation(${index})" class="bg-red-400 text-white text-sm px-3 py-0.5 rounded">Del</button>
            </td>
        `;
  });
}

function addReservation(totalCost) {
  const reservation = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    carType: carType.value,
    startDate: startDate.value,
    endDate: endDate.value,
    totalCost: totalCost,
  };

  if (editIndex !== -1) {
    reservations[editIndex] = reservation;
    editIndex = -1;
  } else {
    reservations.push(reservation);
  }

  localStorage.setItem("reservations", JSON.stringify(reservations));
  form.reset();
  displayReservations();
}

function updateReservation(index) {
  const reservation = reservations[index];
  name.value = reservation.name;
  email.value = reservation.email;
  phone.value = reservation.phone;
  carType.value = reservation.carType;
  startDate.value = reservation.startDate;
  endDate.value = reservation.endDate;
  editIndex = index;

  totalCost.value = reservation.totalCost;
}

function deleteReservation(index) {
  reservations.splice(index, 1);
  localStorage.setItem("reservations", JSON.stringify(reservations));
  displayReservations();
}

function validateForm() {
  let isValid = true;

  if (nameValidator()) {
    name.classList.add("text-red-500");
    nameError.classList.remove("hidden");
    isValid = false;
  } else {
    name.classList.remove("text-red-500");
    nameError.classList.add("hidden");
  }

  if (emailValidator()) {
    email.classList.add("text-red-500");
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    email.classList.remove("text-red-500");
    emailError.classList.add("hidden");
  }

  if (phoneValidator()) {
    phone.classList.add("text-red-500");
    phoneError.classList.remove("hidden");
    isValid = false;
  } else {
    phone.classList.remove("text-red-500");
    phoneError.classList.add("hidden");
  }

  if (carType.value === "") {
    carType.classList.add("text-red-500");
    carTypeError.classList.remove("hidden");
    isValid = false;
  } else {
    carType.classList.remove("text-red-500");
    carTypeError.classList.add("hidden");
  }

  if (startDateValidator()) {
    startDate.classList.add("text-red-500");
    startDateError.classList.remove("hidden");
    isValid = false;
  } else {
    startDate.classList.remove("text-red-500");
    startDateError.classList.add("hidden");
  }

  if (endDateValidator()) {
    endDate.classList.add("text-red-500");
    endDateError.classList.remove("hidden");
    isValid = false;
  } else {
    endDate.classList.remove("text-red-500");
    endDateError.classList.add("hidden");
  }
  if (isValid) {
    return true;
  } else {
    return false;
  }
}
function nameValidator() {
  const is2Words = name.value.trim().split(" ").length > 1;
  if (name.value.trim() === "" || !is2Words) {
    return true;
  } else {
    return false;
  }
}

function emailValidator() {
  if (
    email.value.trim() === "" ||
    !email.value.includes("@") ||
    !email.value.includes(".", email.value.indexOf("@"))
  ) {
    return true;
  } else {
    return false;
  }
}

function phoneValidator() {
  const phoneTrimed = phone.value.split(" ").join("");
  const isNumber = isNaN(phoneTrimed);
  if (phoneTrimed.trim() === "" || phoneTrimed.length !== 8 || isNumber) {
    return true;
  } else {
    return false;
  }
}

function startDateValidator() {
  const today = new Date();
  const startDateValue = new Date(startDate.value);
  if (!(startDateValue && startDateValue > today)) {
    return true;
  } else {
    return false;
  }
}

function endDateValidator() {
  const startDateValue = new Date(startDate.value);
  const endDateValue = new Date(endDate.value);
  if (!(endDateValue && endDateValue > startDateValue)) {
    return true;
  } else {
    return false;
  }
}

function calcTotal() {
  const startDateValue = new Date(startDate.value);
  const endDateValue = new Date(endDate.value);
  const diffTime = Math.abs(endDateValue - startDateValue);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const carTypeValue = carType.value;

  return diffDays * carTypeValue + " TND";
}

function submitForm(event) {
  event.preventDefault();
  const isValid = validateForm();
  if (isValid) {
    totalCost.value = calcTotal();
    addReservation(calcTotal());
  } else {
    totalCost.value = "0 TND";
  }
}

function updateTotalCost(event) {
  event.preventDefault();
  const isValid = validateForm();
  if (isValid) {
    totalCost.value = calcTotal();
  } else {
    totalCost.value = "0 TND";
  }
}

[name, email, phone, carType, startDate, endDate].forEach((input) =>
  input.addEventListener("input", (event) => updateTotalCost(event)),
);
