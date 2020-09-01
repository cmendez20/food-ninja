const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

// burger.addEventListener('click', () => {
//   if (menu.classList.contains('hidden')) {
//     menu.classList.remove('hidden');
//   } else {
//     menu.classList.add('hidden');
//   }
// })

// OTHER WAY TO CREATE RESPONSIVE HAMBURGER MENU

burger.addEventListener('click', () => {
  menu.classList.toggle("hidden");
})