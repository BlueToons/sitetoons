const image = document.getElementById('interactive-image');
        const audio = document.getElementById('audio');
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Image sources
        const imageSources = [
            'images/standingGuy.png',
            'images/runningMan.gif'
        ];

        // Track current image and movement direction
        let currentImageIndex = 0;
        let lastDirection = null;
        let lastMovementType = null;

        function getNextDirection(previousDirection) {
            // If no previous direction, choose randomly
            if (previousDirection === null) {
                return Math.random() < 0.5 ? -1 : 1;
            }
            
            // Always return the opposite of the previous direction
            return previousDirection * -1;
        }

        function animateImage() {
            // Alternate between horizontal and vertical movement
            const horizontal = lastMovementType === null ? 
                (Math.random() < 0.5) : 
                !lastMovementType;

            // Get the next direction (opposite of last time)
            const direction = getNextDirection(lastDirection);

            // Update tracking variables
            lastDirection = direction;
            lastMovementType = horizontal;

            // Ensure audio is stopped before starting
            audio.pause();
            audio.currentTime = 0;

            if (horizontal) {
                // Start from left or right
                image.style.top = `${Math.random() * windowHeight}px`;
                image.style.left = direction > 0 ? '-400px' : `${windowWidth}px`;
                image.style.transform = `translateX(${direction > 0 ? windowWidth + 400 : -windowWidth - 400}px)`;
            } else {
                // Start from top or bottom
                image.style.left = `${Math.random() * windowWidth}px`;
                image.style.top = direction > 0 ? '-300px' : `${windowHeight}px`;
                image.style.transform = `translateY(${direction > 0 ? windowHeight + 300 : -windowHeight - 300}px)`;
            }

            // Start audio when image starts moving
            audio.volume = 1;
            audio.play();

            // Create a transition end listener to stop audio
            const transitionEndHandler = () => {
                audio.pause();
                audio.currentTime = 0;
                image.removeEventListener('transitionend', transitionEndHandler);
            };

            image.addEventListener('transitionend', transitionEndHandler);
        }

        // Initial state - waiting for click
        image.addEventListener('click', function() {
            // Swap to next image
            currentImageIndex = (currentImageIndex + 1) % imageSources.length;
            image.src = imageSources[currentImageIndex];

            // If this is the first click, remove click event and start animations
            if (currentImageIndex === 1) {
                image.removeEventListener('click', arguments.callee);
                
                // Immediately start first animation
                animateImage();

                // Setup interval for subsequent animations
                setInterval(() => {
                    animateImage();
                }, 3000 + Math.random() * 4000);
            }
        });