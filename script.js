const images = ["d.jpg", "a.jpg", "6148xVIsG4L._SX355_.jpg", "119046.webp"];
let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    galleryImage.src = images[currentIndex];
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    galleryImage.src = images[currentIndex];
});
