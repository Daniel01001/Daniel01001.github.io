// Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Animate the header on page load
gsap.from("header", {
  opacity: 0,
  duration: 1.5,
});

// Animate the main content on page load
gsap.from("main", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
});

// Animate the sections on scroll
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
  });
});

//nav bar 
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav.navbar');
  if (window.scrollY > 0) {
      navbar.classList.add('sticky');
  } else {
      navbar.classList.remove('sticky');
  }
});

