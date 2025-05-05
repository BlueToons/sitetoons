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

// Project category filtering
const categoryButtons = document.querySelectorAll('.category-button');
const projectCards = document.querySelectorAll('.project-card');

categoryButtons.forEach(button => {
  button.addEventListener('click', function() {
      // Remove active class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get selected category
      const selectedCategory = this.getAttribute('data-category');
      
      // Show/hide projects based on category
      projectCards.forEach(card => {
          if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
              card.style.display = 'flex';
          } else {
              card.style.display = 'none';
          }
      });
  });
});