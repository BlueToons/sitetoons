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
  
  // Timeline animations
  document.addEventListener('DOMContentLoaded', function() {
      const timelineItems = document.querySelectorAll('.timeline-item');
      
      // Check if an element is in viewport
      function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
      }
      
      // Animation for timeline items when they enter viewport
      function checkVisibility() {
          timelineItems.forEach(item => {
              if (isInViewport(item)) {
                  item.classList.add('visible');
              }
          });
      }
      
      // Run on page load
      checkVisibility();
      
      // Run on scroll
      window.addEventListener('scroll', checkVisibility);
      
      // Hover effects for plan items
      const planItems = document.querySelectorAll('.plan-item');
      planItems.forEach(item => {
          item.addEventListener('mouseenter', function() {
              this.classList.add('hover');
          });
          
          item.addEventListener('mouseleave', function() {
              this.classList.remove('hover');
          });
      });
  });