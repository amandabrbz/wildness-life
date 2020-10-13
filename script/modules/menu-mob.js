import outsideClick from "./outsideClick.js";

export default function menuMobInit() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if(menuBtn) {
    eventos.forEach(evento => menuBtn.addEventListener(evento, openMenu));
  
    function openMenu(event) {
      event.preventDefault();
      menuList.classList.add("active");
      menuBtn.classList.add("active");
  
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove("active");
        menuBtn.classList.remove("active");
      });
    }
  }

}
