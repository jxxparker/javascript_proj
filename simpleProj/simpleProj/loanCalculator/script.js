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
    if (isNaN(principal) || isNaN(interest) || isNaN(payments)) {
      alert("please enter valid numbers");
      return;
    }
    // calculatge montly payment
    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);
    if (isFinite(monthly)) {
      //calc total payment and interest
      const total = monthly * payments;
      const totalInterest = total - principal;
      //display the results
      // monthlyPayment.textContent = monthly;
      // totalPayment.textContent = total;
      // totalInterestPayment.textContent = totalInterest;
      animateValue(monthlyPayment, 0, monthly, 1000);
      animateValue(totalPayment, 0, total, 1000);
      animateValue(totalInterestPayment, 0, totalInterest, 1000);
    }
  }

  //animation
  function animateValue(element, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const current = start + (end - start) * progress;
      element.textContent = current.toFixed(2);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }
  //bind the event to calc btn
  calculateBtn.addEventListener("click", calculateLoad);
});
