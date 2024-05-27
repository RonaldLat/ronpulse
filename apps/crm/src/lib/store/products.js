import {writable} from "svelte/store";

export let cart = writable([])

export const name = writable('lat')
export const category_links = writable([
  {link: '/audio', title: 'audio', img: 'earbuds.webp'},
  {link: '/power', title: 'power', img: 'powerbank.webp'},
  {link: '/grooming', title: 'grooming', img: 'trimmer.webp'},
  {link: '/lifestyle', title: 'lifestyle', img: 'smartwatch2.webp'},
  //{link: '/home-decor', title: 'home-decor', img: 'home_decor.jpg'},
  //{link: '/outdoor', title: 'outdoor', img: 'outdoor.jpg'},
])


