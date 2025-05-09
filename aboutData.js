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
  
  // Check if elements exist before adding event listeners
  if (document.querySelector('.blog-toggle')) {
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
  }
  
  // Check if slideshow elements exist
  if (document.querySelector('.slideshow-slide')) {
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
  }
  
  // Check if about page elements exist
  if (document.querySelector('.faq-toggle')) {
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
      
      // Add active class to first FAQ item by default
      if (faqToggles.length > 0) {
          faqToggles[0].parentElement.classList.add('active');
      }
  }
  
  // Check if about sections exist
  if (document.querySelector('.about-section')) {
      // Section hover effects
      const aboutSections = document.querySelectorAll('.about-section');
      
      aboutSections.forEach(section => {
          section.addEventListener('mouseenter', function() {
              this.style.transform = 'translateY(-5px)';
          });
          
          section.addEventListener('mouseleave', function() {
              this.style.transform = 'translateY(0)';
          });
      });
  }