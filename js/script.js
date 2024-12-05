document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    let currentIndex = 0;
    let isTransitioning = false; 
  
    function updateSliderPosition() {
 
      const offset = -currentIndex * 33.333; 
      slider.style.transform = `translateX(${offset}%)`;
    }
  
 
    prevButton.addEventListener("click", () => {
      if (isTransitioning) return; 
      isTransitioning = true;

      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSliderPosition();
  
      slider.addEventListener(
        "transitionend",
        () => {
          isTransitioning = false;
        },
        { once: true }
      );
    });
  
    nextButton.addEventListener("click", () => {
      if (isTransitioning) return; 
      isTransitioning = true;

      currentIndex = (currentIndex + 1) % slides.length;
      updateSliderPosition();

      slider.addEventListener(
        "transitionend",
        () => {
          isTransitioning = false;
        },
        { once: true }
      );
    });
  

    setInterval(() => {
      if (!isTransitioning) {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSliderPosition();
      }
    }, 5000);
  });
  