const dailyGoal = 2000;
let currentInTake = JSON.parse(localStorage.getItem("waterIntake")) || 0;

const display = document.getElementById("progress-display");
const progressBar = document.getElementById("progress-bar");
const btnContainer = document.getElementById("button-container");
const resetBtn = document.getElementById("reset-btn");

// Function to update both screen text, progress bar width, & Local Storage
function updateUI() {
  display.textContent = `${currentInTake} mL / ${dailyGoal} mL`;

  // Calculate percentage
  const percentage = Math.min((currentInTake / dailyGoal) * 100, 100);
  progressBar.style.width = `${percentage}%`;

  // Save current intake to Local Storage as JSOn
  localStorage.setItem("waterIntake", JSON.stringify(currentInTake));
}

updateUI(); // Initial UI update on page load

btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    const amount = Number(e.target.dataset.amount);
    currentInTake += amount;
    console.log(amount);
    updateUI();
  }
});

resetBtn.addEventListener("click", () => {
  currentInTake = 0;
  updateUI();
});
