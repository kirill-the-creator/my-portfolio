function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
  
function calculateCatAge() {
    const catAge = parseFloat(document.getElementById("catAge").value);
    const result = document.getElementById("result");
  
    if (isNaN(catAge) || catAge < 0) {
      result.textContent = "Введите корректный возраст.";
      return;
    }
  
    let humanAge = 0;
    if (catAge === 1) {
      humanAge = 15;
    } else if (catAge === 2) {
      humanAge = 24;
    } else if (catAge > 2) {
      humanAge = 24 + (catAge - 2) * 4;
    }
  
    result.textContent = `Возраст кота в человеческих годах: ${humanAge}`;
}
  
  
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');
  
window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }
    lastScrollY = window.scrollY;
});
  