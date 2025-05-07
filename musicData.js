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

// Updates Toggle Functionality
const updateToggles = document.querySelectorAll('.update-toggle');
updateToggles.forEach(toggle => {
  toggle.addEventListener('click', function() {
      const updateItem = this.parentElement;
      
      // Close all other update items
      updateToggles.forEach(otherToggle => {
          const otherItem = otherToggle.parentElement;
          if (otherItem !== updateItem && otherItem.classList.contains('active')) {
              otherItem.classList.remove('active');
          }
      });
      
      // Toggle current update item
      updateItem.classList.toggle('active');
  });
});

// Audio Player - Pause other tracks when one is playing
const audioPlayers = document.querySelectorAll('audio');
audioPlayers.forEach(player => {
  player.addEventListener('play', function() {
    audioPlayers.forEach(otherPlayer => {
      if (otherPlayer !== player && !otherPlayer.paused) {
        otherPlayer.pause();
      }
    });
  });
});

// Add visual effects when track card is clicked
const trackCards = document.querySelectorAll('.track-card');
trackCards.forEach(card => {
  card.addEventListener('click', function() {
    this.classList.add('pulse');
    setTimeout(() => {
      this.classList.remove('pulse');
    }, 300);
  });
});

// Animation for album art on scroll
const albumArt = document.querySelector('.album-art');
if (albumArt) {
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const rotation = scrollPosition * 0.05;
    albumArt.style.transform = `rotate(${rotation}deg)`;
    
    // Reset rotation when it gets too extreme
    if (Math.abs(rotation) > 15) {
      albumArt.style.transform = 'rotate(0deg)';
    }
  });
}

// Add wave animation to featured track when playing
const featuredAudio = document.querySelector('.featured-track audio');
if (featuredAudio) {
  featuredAudio.addEventListener('play', function() {
    document.querySelector('.featured-track').classList.add('playing');
  });
  
  featuredAudio.addEventListener('pause', function() {
    document.querySelector('.featured-track').classList.remove('playing');
  });
}

// Add click sound effect when buttons are clicked
function addClickSound() {
  const buttons = document.querySelectorAll('button, .track-card, .platform-link');
  const clickSound = new Audio('sounds/click.mp3');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      clickSound.currentTime = 0;
      clickSound.volume = 0.3;
      clickSound.play();
    });
  });
}

// Initialize click sounds if sound effects are available
document.addEventListener('DOMContentLoaded', function() {
  if (window.Audio) {
    try {
      addClickSound();
    } catch (e) {
      console.log('Sound effects not available');
    }
  }
});

// Add pulsing effect to platform icons
const platformIcons = document.querySelectorAll('.platform-icon');
platformIcons.forEach((icon, index) => {
  setTimeout(() => {
    setInterval(() => {
      icon.classList.add('pulse');
      setTimeout(() => {
        icon.classList.remove('pulse');
      }, 500);
    }, 5000);
  }, index * 700); // Stagger the pulsing effect
});