<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	import 'swiper/css/effect-cube';
	import 'swiper/css/autoplay';
	import { Autoplay, EffectCube } from 'swiper/modules';

	export let data;
	console.log(data);

	const cakes = data.cakes;
	const cakes_slides = data.cakes_slides;

	let swiper_element;

	onMount(() => {
		let swiper = new Swiper(swiper_element, {
			modules: [Autoplay, EffectCube],
			// effect: 'cube',
			effect: 'cube',
			grabCursor: true,
			loop: true,
			speed: 1000,
			cubeEffect: {
				shadow: false,
				slideShadows: true,
				shadowOffset: 10,
				shadowScale: 0.94
			},
			autoplay: {
				delay: 2600,
				pauseOnMouseEnter: true
			}
		});
	});
</script>

<body>
	<h1 class="text-center pt-4 text-5xl">X Bakeries</h1>
	<section class="section h-fit min-h-screen">
		<div class="content">
			<h1>Let's Travel The World Together!</h1>
			<p>
				Our tours are designed to transport you to the heart of the world's most captivating
				destinations, creating memories that will last a lifetime. You can uncover the hidden gems,
				iconic landmarks, and unique cultural treasures that make each destination special.
			</p>
			<button class=" bg-[#ffdee9] btn btn-ouline">Order Now</button>
		</div>

		<div bind:this={swiper_element} class="swiper">
			<div class="swiper-wrapper border-none bg-transparent">
				{#each cakes_slides as cake_slide}
					<div class="swiper-slide opacity-1 h-auto overflow-hidden">
						<img src="nobg/{cake_slide.image}" class="h-full border border-pink-600" />
						<div class="cost text-xs text-gray-600 font-semibold shadow-md bg-[#ff75a0]">
							{cake_slide.price}
						</div>
						<div class="overlay">
							<h1>{cake_slide.name}</h1>
							<p>{cake_slide.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-12 w-full">
		<div class=" w-full mx-auto px-4 md:px-16">
			<h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Delicious Cakes</h2>
			<div class="grid w-full place-items-center bg-blue-300 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each cakes as cake}
					<div class="max-w-md w-full overflow-hidden bg-gray-200 rounded-lg shadow-lg">
						<div class="px-4 py-2">
							<h1 class="text-xl font-bold text-gray-800 uppercase">{cake.name}</h1>
							<p class="mt-1 text-sm text-gray-600">{cake.description}</p>
						</div>

						<img class="object-contain w-full h-48 mt-2" src="nobg/{cake.image}" alt={cake.name} />

						<div class="flex items-center justify-between px-4 py-2 bg-gray-900">
							<h1 class="text-lg font-bold text-white">KES. {cake.price}</h1>
							<button
								class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-gray-100 rounded hover:bg-[#ff75a0] focus:bg-gray-400 focus:outline-none"
								>Add to cart</button
							>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<footer class="text-gray-600 body-font">
		<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
			<a
				class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
					viewBox="0 0 24 24"
				>
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
				</svg>
				<span class="ml-3 text-xl">Tailblocks</span>
			</a>
			<p
				class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
			>
				© 2020 Tailblocks —
				<a
					href="https://twitter.com/knyttneve"
					class="text-gray-600 ml-1"
					rel="noopener noreferrer"
					target="_blank">@knyttneve</a
				>
			</p>
			<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
				<a class="text-gray-500">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
					</svg>
				</a>
				<a class="ml-3 text-gray-500">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
						></path>
					</svg>
				</a>
				<a class="ml-3 text-gray-500">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
						<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
					</svg>
				</a>
				<a class="ml-3 text-gray-500">
					<svg
						fill="currentColor"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="0"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							stroke="none"
							d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
						></path>
						<circle cx="4" cy="4" r="2" stroke="none"></circle>
					</svg>
				</a>
			</span>
		</div>
	</footer>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:wght@300;600&display=swap');

	*,
	*::before,
	*::after {
		/* margin: 0; */
		/* padding: 0; */
		box-sizing: border-box;
		font-family: 'Nunito', sans-serif;
	}

	body {
		background-image:
			radial-gradient(
				circle at 20% 100%,
				rgba(184, 184, 184, 0.1) 0%,
				rgba(184, 184, 184, 0.1) 33%,
				rgba(96, 96, 96, 0.1) 33%,
				rgba(96, 96, 96, 0.1) 66%,
				rgba(7, 7, 7, 0.1) 66%,
				rgba(7, 7, 7, 0.1) 99%
			),
			/* linear-gradient(40deg, #040a22, #162561, #202e64, #6f7aa6); */
				linear-gradient(40deg, #ffdee9, #ffacd3, #ff75a0, #ff4081);
		background-repeat: no-repeat;
		background-size: cover;
	}

	.xection {
		display: grid;
		grid-template-columns: 50% 45%;
		place-items: center;
		gap: 60px;
		min-height: 100vh;
		padding: 20px 60px;
	}

	/* CONTENT */

	.content {
		max-width: 2400px;
	}

	.content h1 {
		font-family: 'Comfortaa', sans-serif;
		font-size: clamp(2rem, 4vw, 3.5rem);
		font-weight: 700;
		line-height: 1.2;
		letter-spacing: 1px;
		margin-bottom: 36px;
		color: #fff;
	}

	.content p {
		font-size: clamp(1rem, 4vw, 1.1rem);
		font-weight: 300;
		line-height: 1.5;
		margin-bottom: 30px;
		color: #fff;
	}

	.content .button:is(:hover, :focus) {
		transform: scale(0.98);
		background-color: #6f7aa6;
		color: #eaeaea;
	}

	/* SLIDER */

	.swiper {
		position: relative;
		width: 400px;
		height: 490px;
	}

	.swiper-slide {
		position: relative;
		background-position: center;
		background-size: cover;
		border: 1px solid rgba(255, 255, 255, 0.3);
		user-select: none;
		border-radius: 20px;
	}

	.cost {
		position: absolute;
		top: 8px;
		right: 6px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
		border-radius: 30px;
		padding: 6px 10px;
		/* font-size: clamp(0.8rem, 4vw, 0.9rem); */
	}

	.dark-text {
		color: #202134;
	}

	.swiper-slide img {
		width: 100%;
		height: 100%;
		border-radius: 20px;
	}

	.overlay {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 150px;
		padding: 10px 20px;
		background: rgba(93, 95, 145, 0.2);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-top: 1px solid rgba(255, 255, 255, 0.3);
		color: #fff;
		border-radius: 0 0 20px 20px;
	}

	.overlay h1 {
		font-size: clamp(1.2rem, 4vw, 1.5rem);
		font-weight: 600;
	}

	.overlay p {
		font-size: clamp(0.8rem, 4vw, 0.9rem);
		font-weight: 300;
		line-height: 1.3;
	}

	.ratings {
		display: flex;
		column-gap: 10px;
		margin-top: -6px;
	}

	.ratings span {
		font-size: clamp(0.8rem, 4vw, 0.9rem);
		font-weight: 300;
	}

	.star {
		color: #afe312;
	}

	@media (max-width: 1050px) {
		.swiper {
			width: 350px;
			height: 450px;
		}
	}

	@media (max-width: 930px) {
		.xection {
			grid-template-columns: 100%;
			grid-template-rows: 55% 40%;
			grid-template-areas:
				'slider'
				'content';
			place-items: center;
			gap: 64px;
			padding: 60px;
		}

		.swiper {
			grid-area: slider;
		}

		.content {
			grid-area: content;
			text-align: center;
		}

		.content h1 {
			margin-bottom: 20px;
		}
	}

	@media (max-width: 470px) {
		xection {
			padding: 40px 40px 60px;
		}

		.swiper {
			width: 300px;
			height: 400px;
		}
	}
</style>
