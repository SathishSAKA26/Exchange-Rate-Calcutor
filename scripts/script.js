"use strict";

// Select all doc elements
const currencyOneEl = document.getElementById("currency-one");
const currencyTwoEl = document.getElementById("currency-two");

const amountOneEl = document.getElementById("amount-one");
const amountTwoEl = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");

const btnSwap = document.getElementById("swap");

const url =
  "https://v6.exchangerate-api.com/v6/a0336ef9686b15b567f47254/latest/USD";

// Function
function calculate() {
  const currencyOne = currencyOwoEl.value;
  const currencyTwo = currencyTwoEl.value;

  fetch(url + `${currencyOne}`).then(rep);
}

// AddEventListener

// Initial value
