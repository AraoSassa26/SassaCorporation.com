// hamburguer.js
document.addEventListener("DOMContentLoaded", () => {
    const hamburguer = document.querySelector(".hamburguer-nav");
    const menuList = document.querySelector(".menu-list-nav");
  
    if (hamburguer && menuList) {
      hamburguer.addEventListener("click", () => {
        menuList.classList.toggle("active");
      });
    }
  });
  