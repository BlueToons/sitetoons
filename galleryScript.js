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

// Category filtering
const tabButtons = document.querySelectorAll('.tab-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

tabButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    this.classList.add('active');
    
    const category = this.getAttribute('data-category');
    
    // Filter gallery items
    galleryItems.forEach(item => {
      if (category === 'all') {
        item.style.display = 'block';
        
        // Apply a small random delay for a staggered appearance
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, Math.random() * 300);
      } else {
        if (item.classList.contains(category)) {
          item.style.display = 'block';
          
          // Apply a small random delay for a staggered appearance
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, Math.random() * 300);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          
          // Hide after fade out
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      }
    });
  });
});

// Modal functionality
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeModal = document.querySelector('.close-modal');

// Get all images
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
    
    // Get the caption from parent gallery item's overlay
    const captionText = this.parentElement.querySelector('.gallery-overlay').innerHTML;
    modalCaption.innerHTML = captionText;
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling again
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling again
  }
});

// Initialize with a subtle entrance animation for all gallery items
window.addEventListener('load', function() {
  galleryItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 100 + (index * 100)); // Staggered delay
  });
});

// Optional: Add keyboard navigation for the modal
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});