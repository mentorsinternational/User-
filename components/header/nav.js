const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelector('.nav-links');

let rotation = 0

navIcon.addEventListener('click', () => {
  navLinks.classList.toggle('slide');
  rotation = rotation === 0 ? -90 : 0;
  navIcon.firstElementChild.style.transform = `rotate(${rotation}deg)`;
})
