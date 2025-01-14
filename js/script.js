document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const themeButton = document.getElementById("toggleTheme");
  
    let currentIndex = 0;
    let isTransitioning = false; 
    const slideIntervalTime = 5000; 
    let slideInterval; 
  
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");
    const firstImage = document.querySelector("img");
  
    const imagesToSwitch = [
      { id: 'insta2', lightSrc: '/imgs/insta_b.png', darkSrc: '/imgs/insta_w.png' },
      { id: 'x2', lightSrc: '/imgs/x_b.png', darkSrc: '/imgs/x_w.png' },
      { id: 'gm2', lightSrc: '/imgs/gm_b.png', darkSrc: '/imgs/gm_w.png' },
      { id: 'youtube', lightSrc: '/imgs/yt_b.png', darkSrc: '/imgs/yt_w.png' },
      { id: 'insta', lightSrc: '/imgs/insta_b.png', darkSrc: '/imgs/insta_w.png' },
      { id: 'x', lightSrc: '/imgs/x_b.png', darkSrc: '/imgs/x_w.png' },
      { id: 'ttk', lightSrc: '/imgs/ttk_b.png', darkSrc: '/imgs/ttk_w.png' },
      { id: 'ifc', lightSrc: '/imgs/if_b.png', darkSrc: '/imgs/if_w.png' },
    ];
  
    function updateTheme() {
        const isLightMode = body.classList.contains("light-mode");
        themeButton.textContent = isLightMode ? "☼" : "☾";
        firstImage.src = isLightMode ? "/imgs/ab.png" : "/imgs/logo.png";
  
        imagesToSwitch.forEach((image) => {
          const imgElement = document.getElementById(image.id);
          if (imgElement) {
            imgElement.src = isLightMode ? image.lightSrc : image.darkSrc;
          }
        });
    }
  
    if (savedTheme) {
        body.classList.toggle("light-mode", savedTheme === "light");
        updateTheme();
    }
  
    themeButton.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        const currentTheme = body.classList.contains("light-mode") ? "light" : "dark";
        localStorage.setItem("theme", currentTheme);
        updateTheme();
    });
  

    imagesToSwitch.forEach((image) => {
      const imgElement = document.getElementById(image.id);
      if (imgElement) {
        imgElement.src = body.classList.contains("light-mode") ? image.lightSrc : image.darkSrc;
      }
    });
  
    function updateSliderPosition() {
        const offset = -currentIndex * (100 / slides.length);
        slider.style.transform = `translateX(${offset}%)`;
    }
  
    function startSlider() {
        slideInterval = setInterval(() => {
            if (!isTransitioning) {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSliderPosition();
            }
        }, slideIntervalTime);
    }
  
    function resetSliderInterval() {
        clearInterval(slideInterval);
        startSlider();
    }
  
    prevButton.addEventListener("click", () => {
        if (isTransitioning) return;
        isTransitioning = true;
  
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSliderPosition();
        resetSliderInterval();
  
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
        resetSliderInterval();
  
        slider.addEventListener(
            "transitionend",
            () => {
                isTransitioning = false;
            },
            { once: true }
        );
    });
  
    startSlider();
  });
  