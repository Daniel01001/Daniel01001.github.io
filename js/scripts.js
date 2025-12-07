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
