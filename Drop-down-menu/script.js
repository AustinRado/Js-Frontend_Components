const HOST = 'server.com/';

function populateCategories(category) {
  api.get(HOST + 'categories', {category}, function(categories) {
    let newCategories = '';
    for (const category of categories) {
      const categoryElement = `
        <li class="menu__sub__categories__item">
          <a href="#" class="menu__sub__categories__item__link">${category}</a>
        </li>
      `;
      newCategories += categoryElement;
    }
    const categoriesElement = document.getElementsByClassName(`menu__sub__categories__items--${category}`)[0];
    categoriesElement.innerHTML = newCategories;
  });
}

function showSubmenu() {
    const submenu = document.getElementsByClassName("menu__sub")[0];
    submenu.style.display = "block";

    populateCategories('top');
    populateCategories('additional');
  }
  
  function showSubmenu() {
    const submenu = document.getElementsByClassName("menu__sub")[0];
    submenu.style.display = "block";
  
    populateCategories('top');
    populateCategories('additional');
  }
  
  function hideSubmenu() {
    const submenu = document.getElementsByClassName("menu__sub")[0];
    submenu.style.display = "none";
  }
  
  let active = null;
  
  function onMenuItemMouseEnter(item) {
    if (active) {
      active.classList.remove("menu__main__item--active");
    }
    active = item;
    item.classList.add("menu__main__item--active");
    showSubmenu();
  }
  
  const menuItems = document.getElementsByClassName("menu__main__item");
  for (const menuItem of menuItems) {
    menuItem.onmouseenter = () => onMenuItemMouseEnter(menuItem)
  }
  
  const menu = document.getElementsByClassName("menu")[0];
  menu.onmouseleave = hideSubmenu;
  //for...of The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
  //this include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
/*the use of the () => syntax just creates a function within the body as everything after the arrow. It’s the equivalent of
function() {
    return onMenuItemMouseEnter(item);
  }*/
 
//rendering submenus
/*
The values that’ll come from our server are as follows:

    The lists that go into each column
    The image matching the menu item

We define a new endpoint called “categories,” and it gives a list of values based on the “category” it received in the data field.

Next, let’s remove the hardcoded values and populate it on the JavaScript directly.

 */

/*
This code defines a simple JavaScript API client that makes a GET request to a server at the HOST URL when the user clicks on the document. The api.get() function takes the HOST URL, an empty data object, and a callback function as arguments. The displayText() function is used as the callback, and it simply adds the response text to the document body.

On the server side, the endpoints object defines a single endpoint for the root URL ("/"). This endpoint supports the GET method and returns the string "hello world" when called.

The getFunction() function is used to handle GET requests. It takes the URL, data, and callback as arguments, extracts the domain and endpoint from the URL, and calls the callback with the response from the appropriate endpoint in the endpoints object.
*/

//SERVER

function getCategories(data){
  if (data.category == 'top'){
    return[
      'Server apple',
      'Server banana',
      'Server pear',
      'Server orange'
    ]
  }
  if (data.category == 'additional'){
    return[
      'Server square',
    'Server circe',
    'Server oval',
    'Server diamond'
    ]
  }
  return[];
  //
}

const endpoints = {
  "/categories": {
    "get": getCategories
  }
}
function getFunction(url, data, callback){
  const domain = url.substring(0, url.indexOf("/"));
  const endpoint = url.substring(url.indexOf("/"), url.length);

  callback(endpoints[endpoint]["get"](data));
}

/*  This function takes three arguments: url, data, and callback. The url argument is the URL of the endpoint being requested. The data argument is an object containing any data that should be sent to the server, but in this example, it's not used. The callback argument is a function that will be called when the server responds to the request.

The function first extracts the domain from the URL by taking all characters before the first occurrence of "/". It then extracts the endpoint from the URL by taking all characters from the first occurrence of "/" to the end of the URL.

Finally, it calls the callback function with the response from the appropriate endpoint in the endpoints object. The response is obtained by looking up the endpoint key in the endpoints object and then getting the value associated with the "get" key. In the example code provided earlier, the value associated with "get" key is the string "hello world".*/
const api = {
  get: getFunction
};
