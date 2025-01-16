document.addEventListener("DOMContentLoaded", () => {
  // Select the elements
  const calculateBtn = document.getElementById("calculateBtn");
  const amountInput = document.getElementById("amount");
  const interestInput = document.getElementById("interest");
  const yearsInput = document.getElementById("years");

  // summaryd
  const monthlyPayment = document.getElementById("monthly");
  const totalPayment = document.getElementById("total");
  const totalInterestPayment = document.getElementById("totalInterest");

  // function to calc the loan
  function calculateLoad() {
    const principal = parseFloat(amountInput.value);
    const interest = parseFloat(interestInput.value) / 100 / 12;
    const payments = parseFloat(yearsInput.value) * 12;
  }
  //bind the event to calc btn
  calculateBtn.addEventListener("click", calculateLoad);
});
