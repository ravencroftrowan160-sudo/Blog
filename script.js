// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Set active link based on current page
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add scroll effect to navbar
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = 'var(--shadow)';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Form submission handler (for contact form)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            // Add your form handling logic here
        });
    }
});

// Utility function for API calls
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Scroll-to-top functionality
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        if (!document.querySelector('.scroll-to-top')) {
            const scrollButton = document.createElement('button');
            scrollButton.className = 'scroll-to-top';
            scrollButton.innerHTML = '↑';
            scrollButton.onclick = function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
            document.body.appendChild(scrollButton);
        }
    } else {
        const scrollButton = document.querySelector('.scroll-to-top');
        if (scrollButton) {
            scrollButton.remove();
        }
    }
});
