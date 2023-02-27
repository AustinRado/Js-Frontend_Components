# Note of features I want to implement


Top-level menu bar that is always visible.
Hovering over an item is what brings up submenus
Submenus are separated into two, labeled columns
Submenus that include a portion for images
Submenus are all the same size
Transitioning from one submenu to another is seamless. Rather than closing and opening animations, the contents change
The submenu columns have clickable links, but the top-level option is also clickable (e.g., users can click on “Electronics” but also a specific type of electronics)
Submenu images are also clickable
When a user’s mouse leaves the submenu, it closes

 ## steps I when creating new components:

    Figure out groupings
    Name classes and fill divs with text
    Switch the colors temporarily to give distinct contrast for easier styling
    Apply spacing styles in the order of outer to the inner (e.g., child divs will be styled after their parent ones)
    Switch off ugly temporary colors, use real colors, and style the rest.

### Rendering submenu items
I realized that to target the individual columns, I was missing a modifier CSS class, so I added menu__sub__categories__items--top to the top categories list (and the corresponding class to the additional categories list).

For the JavaScript, the part to look at is in showSubmenu. When we show the submenu, we’ll populate the values from the server. Take a moment to make sure you understand it. The syntax with backticks is simply string interpolation, where we can define a regular string but insert dynamic values with ＄{dynamicValue} syntax. We’re basically just calling the API, taking the list of results, creating an li element with each item, and then finding the right list to put them under.

Note that in a real application, having the server fetch information at the exact moment the information is needed should be avoided when possible. It just adds wait time for the user. There are certain scenarios where it’s not possible, like when you’re selecting plane tickets, and the user won’t know which plane routes to look up until you’ve filled out the fields. However, in our case, there’s only a handful of menu items, and we can call this as soon as the page is loaded and cache it for when the user hovers over the item. You can tell that even eBay has a slight delay when you hover over the menu item because it’s getting the images at the exact moment you need it.
