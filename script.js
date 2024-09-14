// Add event listeners to navigation buttons
document.querySelectorAll("nav button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = event.target.textContent.trim().toLowerCase();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// Add event listener to contact form submit button
document
  .querySelector('form button[type="submit"]')
  .addEventListener("click", (event) => {
    event.preventDefault();
    // TO DO: implement form submission logic here
    console.log("Form submitted!");
  });
