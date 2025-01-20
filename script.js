document.addEventListener("DOMContentLoaded", () => {
    // Wait for the page to fully load
    window.onload = () => {
      setTimeout(() => {
        // Add the 'loaded' class to the body after 2 seconds
        document.body.classList.add('loaded');
        // Remove the preloader after the transition
        setTimeout(() => {
          const preloader = document.getElementById('preloader');
          if (preloader) preloader.remove();
        }, 1000); // Matches the CSS transition duration
      }, 2000) // Delay before revealing content
    };
  });
