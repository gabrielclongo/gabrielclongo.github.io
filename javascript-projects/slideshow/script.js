const images = [
  "img/bridge.png",
  "img/castle.png",
  "img/howth.png",
  "img/temple.png",
  "img/library.png"
];

let current = 0;
let slide;

window.onload = function () {
  slide = document.getElementById("slide");

  showSlide();

  setInterval(nextSlide, 2000);
};

function showSlide() {
  slide.src = images[current];
}

function nextSlide() {
  current = (current + 1) % images.length;
  showSlide();
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  showSlide();
}