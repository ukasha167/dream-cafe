let allDishes = [];

fetch('menu.json')
  .then(res => res.json())
  .then(data => {
    allDishes = data;
    renderChefPicks();
    renderCarousels();
    attachCarouselControls();
  });

function renderChefPicks() {
  const picks = allDishes.filter(dish => dish.highlight);
  const container = document.getElementById('picks-grid');
  picks.forEach(dish => container.appendChild(createCard(dish)));
}

function renderCarousels() {
  const categories = ['Coffee', 'Bakery'];
  categories.forEach(cat => {
    const carousel = document.getElementById(`${cat.toLowerCase()}-carousel`);
    const items = allDishes.filter(d => d.category === cat);
    items.forEach(dish => carousel.appendChild(createCard(dish)));
  });
}

function createCard(dish) {
  const card = document.createElement('div');
  card.className = 'menu-card';
  card.innerHTML = `
    <img src="${dish.image}" alt="${dish.name}">
    <h4>${dish.name} - ${dish.price}</h4>
    <p>${dish.description}</p>
  `;
  return card;
}

function attachCarouselControls() {
  document.querySelectorAll('.menu-category').forEach(category => {
    const track = category.querySelector('.carousel-track');
    const prev = category.querySelector('.prev');
    const next = category.querySelector('.next');

    const visibleCards = 4;
    const cardWidth = 260;
    const totalItems = track.children.length;

    let index = 0;

    prev.addEventListener('click', () => {
      index = (index - 1 + totalItems) % totalItems;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    });

    next.addEventListener('click', () => {
      index = (index + 1) % totalItems;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    });
  });
}

