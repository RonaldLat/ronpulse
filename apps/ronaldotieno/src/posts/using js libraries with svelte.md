---
title: Using JavaScript Libraries with Svelte
author: Ronald Otieno
date: 2023-10-29
layout: blog
published: true
excerpt: Learn the techniques of using any JavaScript library in a Svelte app and most importantly discover the super powers hidden inside Svelte Actions.
---

## Introduction

When using JavaScript libraries, the most important thing to do is usually to get a DOM reference that the library can interact with.
In vanilla JavaScript projects, this is normally easy by using the native API's such `querySelector` or `getDocumentById`. But when working with frameworks such as Svelte, Vue or React, different methods are use to get reference to the DOM. In Svelte we use `bind:this` directive.
In this article I will go through different methods of using any JavaScript library in your Svelte app.

## onMount lifecycle

The onMount is a lifecyle function designed for executing code when a component is first mounted in the DOM.

Code written within the onMount block runs only once when the component is initially rendered. Allowing for actions such as fetching data, initializing variables, or interacting with DOM immediately after the component is mounted.

### Example with Motion One Animation Library

In this example we be using an animation library called (Motion One)[https:///motion.dev "Motion One website"].

### Install the library

`npm install motion`

### Import and use the libarary

```svelte
<script>
    import {onMount} from 'svelte'
    import {animate, stagger} from 'motion'

    //wait for the DOM to load
    onMount(()=>}{
                const letters = document.querySelectorAll('.letter');

                animate(
                    letters,
                    {color: 'orangered', y: [0, 30, -60,0], rotate: 360},
                    {duration: 1, delay: stagger(0.1), repeat: Infinity}
                       )

            })
</script>

<div class="letters flex gap-0.5 text-6xl font-semibold uppercase">
  {#each 'Svelte'.split('') as letter}
    <span class="letter inline-block"> {letter}</span>
  {/each}
</div>
```

This method works but there is a catch. As your app grows the complexity becomes difficult to manage.
And also this is not the svelte way of doing things.
The Svelte way of handling the DOM is by using the `bind` directive to gain reference to an element instead of querying the DOM yourself.

## Dynamic Import

In Svelte, dynamic imports allow for the asynchronous loading of components or other modules when they're need, rather than at the initial page load.

Using the `import()` function, you can load components or modules on demand.

This helps in optimizing perfomance by fetching code only when required, enabling faster initial page loads.

Here is an example of dynamically importing a JavaScript module.

Let's assume you have a JavaScript module named `mathUtils.js` with some basic Mathematics utility functions:

```js
export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
```

In a Svelte component, you can import and use this module:

```svelte
<script>
  async function loadMathModule() {}
</script>
```

Dynamically importing a moduling when interacting with a library will only avail the browser features, and DOM when required.
This will prevent the library code from running on the server during server side rendering whereby the library will try to access APIs such as the window object which is not available on the server.

## Disable SSR

In Sveltekit, server-side-rendering (SSR) is enabled by default. However, there might be scenarios where you want to disable SSR for specific pages or components.

To disable SSR, for a particular route or component, create a `+page.js` file for that particular route and add the following line of code.

```js
//+page.js
export const ssr = false;
```

In you add `export const ssr=false ` to your root `+layout.js`, your entire app will only be rendered on the client which essentilly means your turn your app into a Single Page Application (SPA).

Turning SSR off will enable your app to interact only with the browser API and avoid errors that will result when it tries to access browser features that are not available on the server.

### Using the bind directive

We can bind the letters to `letter` variable but there is a problem, there are more than one letters and therefore we should use an array of `letters`.
If we add index to the `each` loop block and we now access access every elements index at every iteration.

```svelte
<script>
  let letters = [];
  $: console.log(leteers);
</script>

{#each 'Svelte'.split('') as letter, i}
  <span bind:this{letters[i]} class="letter inline-block"> {letter}</span>
{/each}
```

And this is the Svelte way of interacting with the DOM.

### Using Svelte Actions

Svelte Action is simply a reusable piece of code that can be used to attach a certain behavior to an element.
This is the most efficient way because it is very reusable as you will see below.
Also note that svelte Actions are just regular functions that can be saved in a different JavaScript file and be imported as a utility.

We shall create a Svelte Action named `animateText` that will be able to animate the text the same way.
We get reference to the parent element `div` then access it's children, `span` which we then animate.

```svelte
<script>
  import { animate, stagger } from 'motion';
  function animateText(element) {
    animate(
      element.children,
      //[...element.children], //for typescript
      { color: 'orangered', y: [0, 30, -60, 0], rotate: 360 },
      { duration: 1, delay: stagger(0.1), repeat: Infinity }
    );
  }
</script>

<div use:animateText class="letters">
  {#each 'Svelte'.split('') as letter, i}
    <span bind:this{letters[i]} class="letter inline-block"> {letter}</span>
  {/each}
</div>
```

The animation we work just as before.

### Improvement of Svelte Actions method

We can take this a step further and encapsulate this entire logic into a Svelte Action function. Because when we have a reference to an element, we can do any sort of JavaScript action with it.

First we grab the elements innerText and trim the whitespace just in case, then we split it. This is all pure JavaScript.
We then set it's contents to empty.
Then we add each letter wrapped inside a `span` one by one to make them separate.

```svelte
<script>
  import { animate, stagger } from 'motion';
  function animateText(element) {
    const text = element.innerTexx.trim().split();

    element.innerText = '';

    text.forEach((letter) => {
      element.innerHTML += `
                            <span class="letter">${letter}</span>
                        `;
    });

    animate(
      element.children,
      //[...element.children], //for typescript
      { color: 'orangered', y: [0, 30, -60, 0], rotate: 360 },
      { duration: 1, delay: stagger(0.1), repeat: Infinity }
    );
  }
</script>

<h1 use:animateText class="letters">Example</h1>
```

Now we can even delete the entire loop block and use a single `h1` tag with text content and achieve the exact animation once again.

We can also pass parameter to the action.
The color parameter will have a default of orangered in this example but we can also use a different value when applying the action.

```svelte
<script>
  import { animate, stagger } from 'motion';
  function animateText(element, { color } = { color: 'orangered' }) {
    const text = element.innerTexx.trim().split();

    element.innerText = '';

    text.forEach((letter) => {
      element.innerHTML += `
                            <span class="letter">${letter}</span>
                        `;
    });

    animate(
      element.children,
      //[...element.children], //for typescript
      { color, y: [0, 30, -60, 0], rotate: 360 },
      { duration: 1, delay: stagger(0.1), repeat: Infinity }
    );
  }
</script>

<h1 use:animateText={{ color: 'red' }} class="letters">Example</h1>
```

If you can grasp the concept of Svelte actions you can consider yourself a Svelte power user.
