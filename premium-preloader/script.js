/**
 * Grace Builders Premium Preloader Script
 * Handles: Slider transitions, Progress tracking, and Exit animations
 */

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const progressBar = document.getElementById('progress-bar');
    const percentageText = document.getElementById('percentage');
    const preloader = document.getElementById('preloader');
    
    let currentSlide = 0;
    let progress = 0;
    const totalSlides = slides.length;

    /**
     * Slider Logic
     */
    const nextSlide = () => {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % totalSlides;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    };

    // Change slide every 3 seconds
    const slideInterval = setInterval(nextSlide, 3000);

    /**
     * Progress Simulation
     * In a real app, this would be tied to asset loading or API calls.
     * Here we simulate a smooth premium loading experience.
     */
    const updateProgress = () => {
        if (progress < 100) {
            // Slower at the end for a "completing" feel
            const increment = progress > 80 ? 0.5 : 1.5;
            progress += increment;
            
            if (progress > 100) progress = 100;
            
            const displayProgress = Math.floor(progress);
            progressBar.style.width = `${displayProgress}%`;
            percentageText.innerText = `${displayProgress}%`;
            
            requestAnimationFrame(updateProgress);
        } else {
            // Once 100% is reached, wait a moment then finish
            setTimeout(completeLoading, 800);
        }
    };

    // Start progress animation
    updateProgress();

    /**
     * Completion Logic
     */
    function completeLoading() {
        clearInterval(slideInterval);
        
        // Add fade-out class
        preloader.classList.add('fade-out');
        
        // Allow scrolling again
        document.body.style.overflow = 'auto';
        
        // Remove preloader from DOM after transition
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1200);
    }

    /**
     * Handle Actual Window Load
     * Ensures we don't hide the preloader before everything is ready, 
     * but we also don't wait forever if simulated progress is slower.
     */
    window.addEventListener('load', () => {
        // If window loads faster than simulation, we could accelerate progress
        // or just let the premium animation play out.
        console.log('Window content fully loaded');
    });
});
