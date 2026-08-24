const dailyGoal = 2000;
let currentInTake = 0;

const display = document.getElementById("progress-display");
const btnContainer = document.getElementById("button-container");

btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    const amount = Number(e.target.dataset.amount);
    currentInTake += amount;
    display.textContent = `${currentInTake} mL / ${dailyGoal} mL`;
    console.log(amount);
  }
});
