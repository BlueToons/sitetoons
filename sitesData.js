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

// Animation for site cards when they come into view
document.addEventListener('DOMContentLoaded', function() {
  // Apply staggered animation to site cards
  const siteCards = document.querySelectorAll('.site-card');
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function handleScroll() {
    siteCards.forEach(card => {
      if (isInViewport(card) && !card.classList.contains('animated')) {
        card.style.animationPlayState = 'running';
        card.classList.add('animated');
      }
    });
  }
  
  // Initially pause all animations
  siteCards.forEach(card => {
    card.style.animationPlayState = 'paused';
  });
  
  // Check on load and scroll
  handleScroll();
  window.addEventListener('scroll', handleScroll);
  
  // Site link hover effect
  const siteLinks = document.querySelectorAll('.site-link');
  siteLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
      this.parentElement.parentElement.style.borderColor = '#6e8efb';
    });
    
    link.addEventListener('mouseout', function() {
      this.parentElement.parentElement.style.borderColor = 'black';
    });
  });
});