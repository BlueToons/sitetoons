// Dropdown Menu Toggle
document.querySelector('.dropbtn').addEventListener('click', function() {
  document.querySelector('.dropdown').classList.toggle('show');
});

// Close dropdown when clicking elsewhere
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName('dropdown');
      for (let i = 0; i < dropdowns.length; i++) {
          if (dropdowns[i].classList.contains('show')) {
              dropdowns[i].classList.remove('show');
          }
      }
  }
});

// Blog Post Toggle
const blogToggles = document.querySelectorAll('.blog-toggle');
blogToggles.forEach(toggle => {
  toggle.addEventListener('click', function() {
      const blogItem = this.parentElement;
      
      // Close all other blog items
      blogToggles.forEach(otherToggle => {
          const otherItem = otherToggle.parentElement;
          if (otherItem !== blogItem && otherItem.classList.contains('active')) {
              otherItem.classList.remove('active');
          }
      });
      
      // Toggle current blog item
      blogItem.classList.toggle('active');
  });
});

// Slideshow Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow-slide');
const credits = document.querySelectorAll('.credit-item');
const slideCount = slides.length;

function showSlide(index) {
  // Hide all slides and credits
  slides.forEach(slide => slide.classList.remove('active'));
  credits.forEach(credit => credit.classList.remove('active'));
  
  // Show current slide and credit
  slides[index].classList.add('active');
  credits[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  showSlide(currentSlide);
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);