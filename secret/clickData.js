function activateImage() {
            const image = document.getElementById('interactive-image');
            const audio = document.getElementById('sound-effect');
            
            // Check if the image is currently the static image
            if (image.src.includes('images/danceIdle.png')) {
                // Change to a gif and play sound
                image.src = "images/danceShimmy.gif";
                audio.play();
            } else {
                // Reset to original static image
                image.src = "images/danceIdle.png";
                audio.pause();
                audio.currentTime = 0;
            }
        }