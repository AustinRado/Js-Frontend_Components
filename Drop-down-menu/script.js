const HOST = 'server.com/';

document.onclick = function() {
  api.get(HOST, {}, displayText);
}

function displayText(response) {
  document.body.innerHTML += response;
}

function menuItemEnter(){
    const submenu = document.getElementsByClassName("menu__sub")[0];
   
    submenu.style.display = "block";
}
//document.getElementsByClassName will return a list of elements with the given class name. Even if there is only one element with that class name it will be in a Node List which is why you have to use the [0]
function menuItemLeave(){
    const submenu = document.getElementsByClassName("menu__sub")[0];
   
    submenu.style.display = "none";
}
const menuItems = document.getElementsByClassName("menu__main__item");
for (const menuItem of menuItems){
    menuItem.onmouseenter = menuItemEnter;
    menuItem.onmouseleave = menuItemLeave;
}