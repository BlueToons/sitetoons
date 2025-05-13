const image = document.getElementById('mainImage');
        let isClicked = false;
        
        image.addEventListener('click', function() {
            if (!isClicked) {
                isClicked = true;
                
                // First zoom in
                this.classList.add('zoomed');
                
                // Start fading out slightly after zoom begins
                setTimeout(() => {
                    this.classList.add('fade-out');
                }, 800); // Start fade after 800ms of zoom
                
                // Set timeout for redirect after animations complete
                setTimeout(() => {
                    window.location.href = 'https://example.com'; // Change this to your desired redirect URL
                }, 2000); // Keep the same redirect timing
            }
        });