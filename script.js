// ========================================
// Portfolio Website JavaScript
// ========================================

// Show a message when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("Devaki Budde Portfolio Loaded Successfully!");

});


// ========================================
// Navigation Active Link
// ========================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ========================================
// Current Year in Footer
// ========================================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Devaki Budde | Personal Portfolio`;

}