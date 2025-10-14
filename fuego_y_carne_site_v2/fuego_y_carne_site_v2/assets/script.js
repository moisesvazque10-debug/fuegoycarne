
// Mobile nav
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
if(toggle){ toggle.addEventListener('click',()=> links.classList.toggle('open')); }
