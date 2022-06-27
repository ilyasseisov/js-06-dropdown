const dropdown = document.querySelector('.dropdown');
const options = document.querySelector('.options');
const input = document.querySelector('input');
const listOfOptions = document.querySelectorAll('.option');
const body = document.body;

dropdown.addEventListener('click', (event) => {
  event.stopPropagation();
  event.currentTarget.classList.toggle('opened');
});

listOfOptions.forEach((option) => {
  option.addEventListener('click', (event) => {
    input.value = event.currentTarget.textContent;
  });
});

body.addEventListener('click', () => {
  if (dropdown.classList.contains('opened')) {
    dropdown.classList.remove('opened');
  }
});
