document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("toggleTheme");
  
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
  });
  