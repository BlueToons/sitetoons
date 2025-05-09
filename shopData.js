
// Dropdown Menu Toggle (Same as in homeData.js)
document.querySelector('.dropbtn').addEventListener('click', function() {
  document.querySelector('.dropdown').classList.toggle('show');
});

// Close dropdown when clicking elsewhere (Same as in homeData.js)
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

// Shop Item and Shopkeeper Interaction
document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const shopItems = document.querySelectorAll('.shop-item');
  const shopkeeperImage = document.getElementById('shopkeeper-image');
  const dialogText = document.getElementById('dialog-text');
  const dialogButtons = document.getElementById('dialog-buttons');
  const closeButton = document.getElementById('close-dialog');
  const buyButton = document.getElementById('buy-item');
  
  // Item data with dialogs and URLs
  const itemData = {
    'artbook': {
      name: 'Forgiveness FLP',
      dialog: "Fun Fact: This song was actually going to be an OFFICIAL song for the System Overload mod, however it was instead made into a one-shot. Who knows? Maybe it could become official one day...",
      shopkeeperImage: 'shop/images/shopguy1.png',
      url: 'https://ko-fi.com/s/42b8305afd'
    },
    'tutorial': {
      name: 'Animation Tutorial',
      dialog: "There was going to be a mechanic where the red guys would randomly spawn around you, but they instead just hugged the top-left corner, so I kept it for comedic effect.",
      shopkeeperImage: 'shop/images/shopguy2.png',
      url: 'https://ko-fi.com/s/5405fa3f45'
    },
    'commissions': {
      name: '"CLICK THE MAN" Source Code',
      dialog: "CLICK HIM",
      shopkeeperImage: 'shop/images/shopguy3.png',
      url: 'https://ko-fi.com/s/d5b52f9e65'
    }
  };
  
  // Current selected item
  let currentItem = null;
  
  // Add click event to shop items
  shopItems.forEach(item => {
    item.addEventListener('click', function() {
      // Get item ID from data attribute
      const itemId = this.getAttribute('data-item');
      currentItem = itemData[itemId];
      
      // Update shopkeeper image
      shopkeeperImage.src = currentItem.shopkeeperImage;
      
      // Add animation class for transition effect
      shopkeeperImage.classList.add('animate');
      setTimeout(() => {
        shopkeeperImage.classList.remove('animate');
      }, 500);
      
      // Update dialog text
      dialogText.textContent = currentItem.dialog;
      
      // Show buy button
      buyButton.classList.remove('hidden');
      
      // Add active class to selected item
      shopItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Close dialog button
  closeButton.addEventListener('click', function() {
    // Reset to idle state
    shopkeeperImage.src = 'shop/images/shopguyIdle.png';
    dialogText.textContent = "Welcome to my shop! Take a look around and let me know if something catches your eye!";
    buyButton.classList.add('hidden');
    
    // Remove active class from all items
    shopItems.forEach(item => item.classList.remove('active'));
    
    // Reset current item
    currentItem = null;
  });
  
  // Buy button - redirect to item URL
  buyButton.addEventListener('click', function() {
    if (currentItem) {
      // Show thank you message
      dialogText.textContent = `Thank you for purchasing the ${currentItem.name}! You're being redirected now...`;
      buyButton.classList.add('hidden');
      
      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = currentItem.url;
      }, 2000);
    }
  });
  
  // Add hover effects to shopkeeper
  shopkeeperImage.addEventListener('mouseenter', function() {
    if (!currentItem) {
      this.style.transform = 'scale(1.05)';
    }
  });
  
  shopkeeperImage.addEventListener('mouseleave', function() {
    if (!currentItem) {
      this.style.transform = 'scale(1)';
    }
  });
  
  // Add CSS animation for shopkeeper image transitions
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shopkeeperTransition {
      0% { opacity: 0.7; transform: scale(0.95); }
      100% { opacity: 1; transform: scale(1); }
    }
    
    .shopkeeper-image.animate {
      animation: shopkeeperTransition 0.5s ease;
    }
    
    .shop-item.active {
      background-color: rgba(180, 220, 255, 0.9);
      border-color: #6e8efb;
    }
  `;
  document.head.appendChild(style);
});