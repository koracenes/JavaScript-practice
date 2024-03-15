const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `You are subscibed`;
  } else {
    subResult.textContent = `You are not subscibed`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with visa`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You are paying with master Card`;
  } else if (payPalBtn.checked) {
    paymentResult.textContent = `You are paying with Pay Pal`;
  } else {
    paymentResult.textContent = `You must select payment type`;
  }
};
