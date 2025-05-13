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

// Game box hover effects
const gameBoxes = document.querySelectorAll('.game-box');
gameBoxes.forEach(box => {
  box.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  });
  
  box.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
  });
});

// Play button animations and functionality
const playButtons = document.querySelectorAll('.play-button');
playButtons.forEach((button, index) => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
    this.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.2)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'none';
  });
  
  // Add click event
  button.addEventListener('click', function() {
    // Add a quick "press" animation
    this.style.transform = 'translateY(2px)';
    this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    
    // Get the game name from the previous sibling's h3 content
    const gameName = this.previousElementSibling.querySelector('h3').textContent.trim();
    
    // Define directory paths for each game
    const gamePaths = {
      "the super awesome and cool game": "games/awesomeGame/index.html",
      "CLICK THE MAN": "games/clickMan/index.html",
      "kill those guys !": "games/killGuys/index.html"
    };
    
    // Get the path for the clicked game
    const gamePath = gamePaths[gameName] || "games/default/";
    
    // Navigate to the game directory
    window.location.href = gamePath;
    
    // Reset button state after short delay
    setTimeout(() => {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    }, 200);
  });
});

// Add page entrance animation
document.addEventListener('DOMContentLoaded', function() {
  const gamesContainer = document.querySelector('.games-container');
  const manImage = document.querySelector('.man-image');
  const gameItems = document.querySelectorAll('.game-item');
  
  // Initial state
  gamesContainer.style.opacity = '0';
  gamesContainer.style.transform = 'translateY(50px)';
  
  // Animate container in
  setTimeout(() => {
    gamesContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    gamesContainer.style.opacity = '1';
    gamesContainer.style.transform = 'translateY(0)';
    
    // Animate game items with staggered delay
    gameItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 600 + (index * 200));
    });
  }, 300);
});