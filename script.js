const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

document.getElementById('next').addEventListener('click', () => {
  if (current < slides.length - 1) {
    current++;
    showSlide(current);
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (current > 0) {
    current--;
    showSlide(current);
  }
});

// Tampilkan slide pertama saat awal
showSlide(current);