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

// Friend search functionality
const searchInput = document.getElementById('friendSearch');
const friendCards = document.querySelectorAll('.friend-card');

searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  
  friendCards.forEach(card => {
      const friendName = card.getAttribute('data-name').toLowerCase();
      const friendNameHeading = card.querySelector('.friend-name').textContent.toLowerCase();
      const friendDesc = card.querySelector('.friend-description').textContent.toLowerCase();
      
      if (friendName.includes(searchTerm) || 
          friendNameHeading.includes(searchTerm) || 
          friendDesc.includes(searchTerm)) {
          card.style.display = 'flex';
      } else {
          card.style.display = 'none';
      }
  });
});