document.addEventListener('DOMContentLoaded', () => {
    // Nav Scroll Effect
    const navbar = document.getElementById('mainNav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '0.7rem 0';
                navbar.style.background = 'rgba(13, 13, 18, 0.95)';
            } else {
                navbar.style.padding = '1.2rem 0';
                navbar.style.background = 'rgba(13, 13, 18, 0.85)';
            }
        });
    }

    // Typing Animation
    const textElement = document.getElementById('typing-text');
    const strings = [
        "Offensive Security Enthusiast",
        "Penetration Tester",
        "CTF Player",
        "Security Tool Developer"
    ];
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentString = strings[stringIndex];

        if (isDeleting) {
            textElement.textContent = currentString.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            textElement.textContent = currentString.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentString.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end of string
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % strings.length;
            typingSpeed = 500; // Pause before new string
        }

        setTimeout(typeEffect, typingSpeed);
    }

    if (textElement) {
        setTimeout(typeEffect, 1000); // Initial delay
    }

    // Scroll Reveal & Progress Bar Animation
    function reveal() {
        var reveals = document.querySelectorAll('.reveal, .base-section');

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }

        // Animate progress bars when skills section is visible
        var skillsSection = document.getElementById('skills');
        if (skillsSection) {
            var position = skillsSection.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                var progressBars = document.querySelectorAll('.progress-bar');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
            }
        }
    }

    // Apply reveal class to sections initially
    document.querySelectorAll('.base-section').forEach(section => {
        section.classList.add('reveal');
    });

    window.addEventListener('scroll', reveal);
    reveal(); // Trigger on load
});
