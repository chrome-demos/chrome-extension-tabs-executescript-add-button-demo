Chrome Extension Add Button Demo
================================

Use `chrome.tabs.executeScript` to add a button to current active tab.

Install:
-------

Chrome -> `Extensions` -> Enable `Developer Mode` -> `Load unpacked` -> select the root directory of this project.

Open a page, e.g. <https://stackoverflow.com>, and click the icon of the extension on toolbar, there will be a button added on the page bottom.

Check
-----

The button seems work well, we can find it and call `click()` on it:

```
let button = document.getElementById('inserted');
button.click();
```

there is an alert means it's working.

But when calling `fun()` on it:

```
let button = document.getElementById('inserted');
button.fun();
```

it reports such error:

```
Uncaught TypeError: button.fun is not a function
```

Can't understand why.
