// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth',
                });
            }
        });
    });
});

// Simple alert for form submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you! Your message has been sent.');
        form.reset();
    });
}
