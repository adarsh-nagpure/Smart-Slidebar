function toggleMenu(event, menuId) {

  const currentMenu = document.getElementById(menuId);
  const currentItem = event.currentTarget;

  const allSubmenus = document.querySelectorAll(".submenu");
  const allMenuItems = document.querySelectorAll(".menu-item");

  const isOpen = currentMenu.classList.contains("active");

  allSubmenus.forEach(submenu => submenu.classList.remove("active"));
  allMenuItems.forEach(item => item.classList.remove("active"));


  
 if (!isOpen) {
    currentMenu.classList.add("active");
    currentItem.classList.add("active");
  }
}