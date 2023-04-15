// Obsługa zdarzeń
const form = document.querySelector('form');

form.addEventListener('submit', e => {
e.preventDefault();
alert('Formularz został wysłany!');
});

// Tworzenie animacji
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
img.addEventListener('mouseover', () => {
img.classList.add('zoom');
});

img.addEventListener('mouseout', () => {
img.classList.remove('zoom');
});
});

// Dostosowanie szablonu do urządzeń mobilnych
const menuIcon = document.createElement('div');
menuIcon.classList.add('menu-icon');

const nav = document.querySelector('nav');
nav.insertBefore(menuIcon, nav.firstChild);

menuIcon.addEventListener('click', () => {
nav.classList.toggle('menu-visible');
});