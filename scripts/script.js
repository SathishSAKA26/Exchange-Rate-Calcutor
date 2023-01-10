"use strict";

// Select all doc elements
const currencyOneEl = document.getElementById("currency-one");
const currencyTwoEl = document.getElementById("currency-two");

const AmountOneEl = document.getElementById("amount-one");
const AmountTwoEl = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");

const btnSwap = document.getElementById("swap");

const url = `https://v6.exchangerate-api.com/v6/a0336ef9686b15b567f47254/latest/`;

// Function
function calculate() {
  let currencyOne = currencyOneEl.value;
  let currencyTwo = currencyTwoEl.value;

  // fetch url
  fetch(
    `https://v6.exchangerate-api.com/v6/a0336ef9686b15b567f47254/latest/${currencyOne}`
  )
    .then((response) => response.json())
    .then((data) => {
      let rate = data.conversion_rates[currencyTwo];
      rateEl.innerText = `1 ${currencyOne} = ${rate.toFixed(2)} ${currencyTwo}`;

      AmountTwoEl.value = (AmountOneEl.value * rate).toFixed(2);
    });
}

// EventListener
currencyOneEl.addEventListener("change", calculate);
currencyTwoEl.addEventListener("change", calculate);
AmountOneEl.addEventListener("input", calculate);
AmountTwoEl.addEventListener("input", calculate);

// btn
btnSwap.addEventListener("click", () => {
  let temp = currencyOneEl.value;
  currencyOneEl.value = currencyTwoEl.value;
  currencyTwoEl.value = temp;
  calculate();
});

calculate();
