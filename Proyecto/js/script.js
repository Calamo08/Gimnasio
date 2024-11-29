// Parallax effect for the hero section
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  const scrollY = window.scrollY;

  hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
});

// Typing effect for hero text
const text = "Redefine Yourself";
let index = 0;

function typeEffect() {
  const typingElement = document.getElementById('typing-text');

  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();

// Scroll animation for sections
const animatedElements = document.querySelectorAll('.animate-on-scroll');

function animateOnScroll() {
  animatedElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight - 100) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();
