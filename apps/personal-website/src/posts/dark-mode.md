---
title: How To Build Offline DarkMode On Your Website
description: Using localStorage to add dark mode to any website in simple steps
img: dark-website.webp
alt: screenshot of dark-themed website
author: Ron
date: 2023-09-15
published: true
layout: blog
tags:
  - css
  - javascript
---

Dark mode and offline web development patterns have been on the rise lately. But why?
I will give one simple answer. Accessibility.
If you want to satistfy your customers of the your top concern should be on how they access your website. If you improve their experience when they are on your website they will be happier. Happy customers keep coming back and this means more profit for your business.

You might wonder what dark mode and offline has to with making customers happier.
Not everyone uses their phone under bright enviroment. And internet is expensive in some countries so some of your customers might save your website for offline viewing later on. I hope you get the point.
Let's get started with adding this offline dark mode to your website.offline

### Why use localStorage?

LocalStorage is simply a database that resides inside the web browser. It allows us to store and retrieve data on the clients machine for later use even without internet connection.
We could have used cookies or caches to store the state of users preference (dark or light mode) but we will go with localStorage.
LocalStorage is prefered because it has several advantages over the other storage options in this use case.

### Advantages of localStorage

1. Free database that come with all browsers. No installation or hosting fee headaches.
2. No expiration. Data remains in the database as long as the browser lives, unless manually deleted.
3. A whooping 5mb space. That is more than enough for most projects.
4. Easy to use key-value pair system. It's easy as it sounds.
5. Client-based. No server overload or database queries. Everything works on the client's machine.

### Make A Simple Website

We will need a website to add the dark mode to. So let's get started with it.

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main>
      <button>darkMode Toggle</button>
      <h1 class="heading">welcome to dark mode</h1>
    </main>
  </body>
</html>
```

There is nothing special here. Just a simple site with button and heading elements wrapped inside a main tag.

### Create and link CSS file

We will use css for styling and javascript for adding functionality.

```css
body {
  max-width: 100%;
  width: 100%;
  height: 100vh;
}
main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  text-transform: uppercase;
}

button {
  position: absolute;
  top: 10px;
  right: 10px;
}
.darkMode {
  background-color: black;
  color: white;
}
```

Most of the styling rules are self-explanatory. The most import rules are in the `.darkMode` class.
In this class you will define how you want the dark mode version of your website to look. You will definetly make things more darker and in this case our background color is set to black and text is set to white. You can use any colors you prefer.

```css
.darkMode {
  background-color: black;
  color: white;
}
```

### Create and link Javascript file

In javascript is where all the magic happens. On a click of a button the entire background of the website will be changed by applying the `.darkMode` class.
The chosen preference will also be saved on the users browser on a database called localStorage.
We will begin by defining a few variables.

```js
let darkMode = localStorage.getItem('darkMode');
```

Instantiate the name of the variable will use to save user's selection in the localStorage.

```js
let darkModeButton = document.querySelector('button');
```

Next we grab the button and store it in a variable so that we can easily refer to it.
I am using the `button` tag to grab it because it is the only button in the page. If you have more than one button use a class or id to refer to it.

The page will initially load on a light theme. But if the user had visited before and changed to dark mode we need to make it load on that setting. This 'if' statement will help us achieve that.

```js
if (darkMode == 'enabled') {
  enableDarkMode();
}
```

This statement will check the localStorage and read `darkMode`'s variable value. If it reads `'enabled'` it will call the function `enableDarkMode()` which will enable dark mode. Don't worry about the function as we will define it in the next line.

```js
function enableDarkMode() {
  document.querySelector('main').classList.add('darkMode');
  localStorage.setItem('darkMode', 'enabled');
}
```

The first line of this function will grab the body element and add the css class `'.darkMode'` which simply applies the rules defined in the css file.

The second line will update the value of `darkMode` to `'enabled'` in the localStorage. So that the chosen mode stays in memory in page reload or in case of internet loss.

```js
function disableDarkMode() {
  document.querySelector('main').classList.remove('darkMode');
  localStorage.setItem('darkMode', null);
}
```

A function of disabling the dark mode is required in case the user wants a light theme later on. The above function does exactly that.
It achieves this by doing the direct opposite of what `enableDarkMode()` function does.
The first line grabs the body element and removes the '.darkMode' class which is responsible for applying the dark mode.
The second line updates the localStorage and changes the value of `darkMode` to `null`. You can think of `null` is `disabled`, you might even use it if you prefer it.

All the variables and functions been defined. But how do will apply them?
That is where the button comes in. A user will click a button to toggle between the modes. On every click a function will be called which will implement the requested changes. An event listenter which will be listening for the 'click' event will be added to the button.

```js
toggleButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
```

When the button is clicked, the value of `darkMode` will be read from the localStorage.
This value is what is going to determine which function is going to be called.
The 'if' statement states that if the value of `darkMode` is not `enabled`, the `enableDarkMode()` function will be called which in return will set the page to dark mode. Otherwise it will call the `disableDarkMode()` function will result to the page being set to the default them.
And that is how you enable dark to your website which works offline.

### Full code

Here are all the codes used in this project.

#### HTML

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main>
      <button>darkMode Toggle</button>
      <h1 class="heading">welcome to dark mode</h1>
    </main>

    <script src="app.js"></script>
  </body>
</html>
```

#### CSS

```css
body {
  max-width: 100%;
  width: 100%;
  height: 100vh;
}
main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  text-transform: uppercase;
}

button {
  position: absolute;
  top: 10px;
  right: 10px;
}
.darkMode {
  background-color: black;
  color: white;
}
```

#### Javascript

```js
let darkMode = localStorage.getItem('darkMode');
let toggleButton = document.querySelector('button');

if (darkMode == 'enabled') {
  enableDarkMode();
}

function enableDarkMode() {
  document.querySelector('main').classList.add('darkMode');
  localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
  document.querySelector('main').classList.remove('darkMode');
  localStorage.setItem('darkMode', null);
}

toggleButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
```
