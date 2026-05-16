fetch('dishes.json')
  .then(response => response.json())
  .then(dishes => {
    const dish = dishes[Math.floor(Math.random() * dishes.length)];
    document.getElementById('dish-image').src = dish.image;
    document.getElementById('dish-name').textContent = dish.name;
    document.getElementById('dish-description').textContent = dish.description;
  });

const testimonials = [
  "\"Best coffee in town — and the coziest vibe!\" - Sarah",
  "\"Dream Café feels like home. Try the croissants!\" - Mike",
  "\"My daily escape from the rush. Amazing staff!\" - Ayesha"
];

let index = 0;
setInterval(() => {
  index = (index + 1) % testimonials.length;
  document.getElementById('testimonial').textContent = testimonials[index];
}, 4000);
