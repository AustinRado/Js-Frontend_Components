function showSubmenu() {
    const submenu = document.getElementsByClassName("menu__sub")[0];
    submenu.style.display = "block";
  }
  
  function hideSubmenu() {
    const submenu = document.getElementsByClassName("menu__sub")[0];
    submenu.style.display = "none";
  }
  
  let active = null;

 function onMenuItemMouseEnter(item){
    if (active){
        active.classList.remove("menu__main__item--active");
}
    active = item;
    item.classList.add("menu__main__item--active");
    showSubmenu();
}
//This function through the classList allows us to add an “active” class to it upon the mouseenter event, and add to the CSS properties that match what it looks like when hovered over (even though we’re not directly hovering over it).

const menuItems = document.getElementsByClassName("menu__main__item");
  for (const menuItem of menuItems) {
    menuItem.onmouseenter = () => onMenuItemMouseEnter(menuItem);
  }
  //for...of The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
  //this include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
/*the use of the () => syntax just creates a function within the body as everything after the arrow. It’s the equivalent of
function() {
    return onMenuItemMouseEnter(item);
  }*/
  const menu = document.getElementsByClassName("menu")[0];
  menu.onmouseleave = hideSubmenu
