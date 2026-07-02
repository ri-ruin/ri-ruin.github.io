// THEME TOGGLE
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  toggleBtn.textContent =
    document.body.classList.contains("light") ? "🌙" : "☀️";
});

// BACK TO TOP BUTTON
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// AUTO AGE CALCULATION (DOB: 09-08-2005)
function calculateAge() {
  const birth = new Date(2005, 7, 9); // month is 0-based
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

// Add age dynamically to hero section
const hero = document.querySelector(".description");
hero.innerHTML += `<br><br>Age: ${calculateAge()}`;
