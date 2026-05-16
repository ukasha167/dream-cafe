document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  alert("Thanks for reaching out! We'll get back to you soon ☕");
  this.reset();
});


document.getElementById("subscribeBtn").addEventListener("click", () => {
  const newsletterEmail = document.getElementById("newsletter").value.trim();
  if (!newsletterEmail || !newsletterEmail.includes("@")) {
    alert("Please enter a valid email to subscribe.");
    return;
  }
  alert("You’re officially subscribed to Dream Café’s newsletter! 🎉");
  document.getElementById("newsletter").value = "";
});

