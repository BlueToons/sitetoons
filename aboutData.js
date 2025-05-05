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

// FAQ Toggle Functionality
const faqToggles = document.querySelectorAll('.faq-toggle');
faqToggles.forEach(toggle => {
  toggle.addEventListener('click', function() {
      const faqItem = this.parentElement;
      
      // Close all other FAQ items
      faqToggles.forEach(otherToggle => {
          const otherItem = otherToggle.parentElement;
          if (otherItem !== faqItem && otherItem.classList.contains('active')) {
              otherItem.classList.remove('active');
          }
      });
      
      // Toggle current FAQ item
      faqItem.classList.toggle('active');
  });
});

// Add subtle animations to skill bars
document.addEventListener('DOMContentLoaded', function() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // Add animation delay to each skill bar for sequential animation
    skillLevels.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.2}s`;
        skill.classList.add('animate');
    });
});