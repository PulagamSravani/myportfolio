// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});
