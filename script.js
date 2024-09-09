document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show or hide the return-to-top button based on scroll position
window.addEventListener('scroll', () => {
    const button = document.querySelector('.return-to-top');
    if (window.scrollY > 300) { // Show button if scrolled more than 300px
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});
