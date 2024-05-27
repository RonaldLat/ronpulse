import {writable} from "svelte/store";

export let cart = writable([])

export const name = writable('lat')
export const category_links = writable([
  {link: '/living', title: 'living room', img: 'living.jpg'},
  {link: '/bedroom', title: 'bedroom', img: 'bedroom.jpg'},
  {link: '/dining', title: 'dining room', img: 'dining.jpg'},
  {link: '/office', title: 'office', img: 'office.jpg'},
  {link: '/home-decor', title: 'home-decor', img: 'home_decor.jpg'},
  {link: '/outdoor', title: 'outdoor', img: 'outdoor.jpg'},
])


