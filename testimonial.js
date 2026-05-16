const sliderData = [
  {
    name: "Sarah",
    quote: "Best coffee in town — and the coziest vibe!",
    rating: 5
  },
  {
    name: "Mike",
    quote: "Dream Café feels like home. Try the croissants!",
    rating: 4
  },
  {
    name: "Ayesha",
    quote: "My daily escape from the rush. Amazing staff!",
    rating: 5
  }
];

const gridData = [
  {
    name: "Ali Raza",
    quote: "Quiet, clean, and perfect for writing.",
    rating: 4
  },
  {
    name: "Emma",
    quote: "The barista remembered my order. Instant win.",
    rating: 5
  },
  {
    name: "Usman",
    quote: "Try their caramel latte — no regrets.",
    rating: 4
  },
  {
    name: "Sana",
    quote: "Free Wi-Fi, soft music, and buttery scones. Heaven.",
    rating: 5
  }
];

function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? '★' : '☆';
  }
  return `<div class="stars">${stars}</div>`;
}



// Slider
const slider = document.getElementById('slider');
let currentIndex = 0;

function renderSlider() {
  slider.innerHTML = '';
  sliderData.forEach(({ name, quote, rating }) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <p>"${quote}"</p>
      ${renderStars(rating)}
      <h4>- ${name}</h4>
    `;
    slider.appendChild(card);
  });
}


function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sliderData.length) % sliderData.length;
  updateSlider();
});

document.querySelector('.right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sliderData.length;
  updateSlider();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % sliderData.length;
  updateSlider();
}, 5000);

// Grid
const grid = document.getElementById('testimonial-grid');

function renderGrid() {
  gridData.forEach(({ name, quote, rating }) => {
    const card = document.createElement('div');
    card.className = 'grid-card';
    card.innerHTML = `
      <h5>${name}</h5>
      ${renderStars(rating)}
      <p>"${quote}"</p>
    `;
    card.classList.add('fade-in');
    grid.appendChild(card);
  });
}


// Init
renderSlider();
renderGrid();
updateSlider();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(card => {
  observer.observe(card);
});