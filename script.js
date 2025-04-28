// Smooth scrolling for nav links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a[href^='#']");
    
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  
  // Sticky header background on scroll
  window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
  
