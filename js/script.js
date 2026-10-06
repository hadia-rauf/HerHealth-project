const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}


// Contact form

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        contactMessage.textContent =
            "Thank you! Your message has been received.";

        contactForm.reset();
    });
}


// Question form

const questionForm = document.getElementById("questionForm");
const questionMessage = document.getElementById("questionMessage");

if (questionForm) {
    questionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        questionMessage.textContent =
            "Thank you for your question. This demo form has received it.";

        questionForm.reset();
    });
}