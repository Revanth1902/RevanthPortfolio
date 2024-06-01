// GSAP for animations
gsap.from(".hero-content h1", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power3.out",
});
gsap.from(".hero-content p", {
  duration: 1,
  y: 50,
  opacity: 0,
  delay: 0.5,
  ease: "power3.out",
});
gsap.from(".client-logos img", {
  scrollTrigger: ".clients",
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.2,
});

// Parallax Scroll Effect
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  document.querySelector(".hero").style.backgroundPositionY = `${
    scrollY * 0.5
  }px`;
});

// Mobile Menu Toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector("nav ul").classList.toggle("active");
});

// Dark Mode Toggle
document.querySelector("#theme-toggle").addEventListener("click", function () {
  toggleTheme();
  document.querySelector("header").classList.toggle("light-mode");
  document.querySelector(".about").classList.toggle("light-mode");
  document.querySelector(".services").classList.toggle("light-mode");
  document.querySelector(".contact").classList.toggle("light-mode");
});

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "🌞";
  } else {
    themeToggle.textContent = "🌙";
  }
}

// Scroll Animations
const controller = new ScrollMagic.Controller();

const aboutScene = new ScrollMagic.Scene({
  triggerElement: ".about",
  triggerHook: 0.8,
})
  .setTween(gsap.from(".about-content", { opacity: 0, y: 50, duration: 1 }))
  .addTo(controller);

const servicesScene = new ScrollMagic.Scene({
  triggerElement: ".services",
  triggerHook: 0.8,
})
  .setTween(
    gsap.from(".service", { opacity: 0, y: 50, duration: 1, stagger: 0.3 })
  )
  .addTo(controller);

const portfolioScene = new ScrollMagic.Scene({
  triggerElement: ".portfolio",
  triggerHook: 0.8,
})
  .setTween(
    gsap.from(".portfolio-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
    })
  )
  .addTo(controller);

  document.addEventListener("DOMContentLoaded", function() {
    const getInTouchButton = document.querySelector(".get-in-touch");
    const hireNowButton = document.querySelector(".hire-now");
    const getInTouchPopup = document.getElementById("get-in-touch-popup");
    const hireNowPopup = document.getElementById("hire-now-popup");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    getInTouchButton.addEventListener("click", function() {
        document.body.appendChild(overlay);
        getInTouchPopup.style.display = "block";
    });

    hireNowButton.addEventListener("click", function() {
        document.body.appendChild(overlay);
        hireNowPopup.style.display = "block";
    });

    overlay.addEventListener("click", function() {
        getInTouchPopup.style.display = "none";
        hireNowPopup.style.display = "none";
        document.body.removeChild(overlay);
    });

    document.querySelectorAll(".close-popup").forEach(function(element) {
        element.addEventListener("click", function() {
            getInTouchPopup.style.display = "none";
            hireNowPopup.style.display = "none";
            document.body.removeChild(overlay);
        });
    });
});



