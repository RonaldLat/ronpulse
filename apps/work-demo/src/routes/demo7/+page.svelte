<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	import 'swiper/css/effect-cube';
	import 'swiper/css/autoplay';
	import { Autoplay, EffectCube, } from 'swiper/modules';

  export let data;
  console.log(data.cakes)
  const cakes = data.cakes

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
	<section class="mb-28">
		<div class="content">
			<h1>Let's Travel The World Together!</h1>
			<p>
				Our tours are designed to transport you to the heart of the world's most captivating
				destinations, creating memories that will last a lifetime. You can uncover the hidden gems,
				iconic landmarks, and unique cultural treasures that make each destination special.
			</p>
			<button>Explore Tours</button>
		</div>

		<div bind:this={swiper_element} class="swiper">
			<div class="swiper-wrapper">
        {#each cakes as cake (cake.name)}
           <!-- content here -->
				<div class="swiper-slide opacity-100 bg overflow-hidden">
					<img
						src="nobg/{cake.image}"
					/>
					<div class="cost dark-text">From Ksh.{cake.price} per Kg</div>
					<div class="overlay">
						<h1>{cake.name}</h1>
						<p>{cake.description}</p>
					</div>
				</div>
        {/each}
			</div>
		</div>
	</section>



  <div class="max-w-full">

    <section class="py-12 ">
      <div class="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8">
        <h2 class="text-3xl text-gray-200 font-extrabold  text-center mb-8">Our Delicious Cakes</h2>
        <div class="grid  sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each cakes as cake}
            <div class="max-w-md w-full flex flex-col justify-between overflow-hidden bg-blue-50 border border-gray-700 rounded-lg shadow-lg ">
              <div class="px-4 py-2">
                <h1 class="text-xl font-bold text-gray-800 uppercase ">{cake.name}</h1>
                <p class="mt-1 text-sm text-gray-600 ">{cake.description}</p>
              </div>

              <img class="object-contain w-full h-48 mt-2" src="nobg/{cake.image}" alt={cake.name}>

              <div class="flex items-center justify-between  px-4 py-2 bg-gray-900">
                <h1 class="text-lg font-bold text-white">KES. {cake.price}</h1>
                <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-gray-100 rounded hover:bg-[#ff75a0] focus:bg-gray-400 focus:outline-none">Add to cart</button>
              </div>
            </div>
          {/each}

        </div>
      </div>
    </section>

</div>
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

	.bg {
		background-image: radial-gradient(
				circle at 20% 100%,
				rgba(184, 184, 184, 0.1) 0%,
				rgba(184, 184, 184, 0.1) 33%,
				rgba(96, 96, 96, 0.1) 33%,
				rgba(96, 96, 96, 0.1) 66%,
				rgba(7, 7, 7, 0.1) 66%,
				rgba(7, 7, 7, 0.1) 99%
			),
			linear-gradient(40deg, #040a22, #162561, #202e64, #6f7aa6);
		background-repeat: no-repeat;
		background-size: cover;
	}
	body {
		background-image: radial-gradient(
				circle at 20% 100%,
				rgba(184, 184, 184, 0.1) 0%,
				rgba(184, 184, 184, 0.1) 33%,
				rgba(96, 96, 96, 0.1) 33%,
				rgba(96, 96, 96, 0.1) 66%,
				rgba(7, 7, 7, 0.1) 66%,
				rgba(7, 7, 7, 0.1) 99%
			),
			linear-gradient(40deg, #040a22, #162561, #202e64, #6f7aa6);
		background-repeat: no-repeat;
		background-size: cover;
	}

	section {
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

	.content button {
		background: #eaeaea;
		color: #202134;
		font-size: clamp(0.9rem, 4vw, 1rem);
		font-weight: 600;
		border: 0;
		outline: 0;
		padding: 8px 14px;
		border-radius: 7px;
		transform: scale(1);
		transition: all 0.4s ease-in;
		cursor: pointer;
	}

	.content button:is(:hover, :focus) {
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
		border: 1px solid rgba(255, 255, 255, 1.0);
		user-select: none;
		border-radius: 20px;
	}

	.cost {
		position: absolute;
		top: 8px;
		right: 6px;
		background: rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
		border-radius: 30px;
		padding: 6px 10px;
		color: #fff;
		font-size: clamp(0.8rem, 4vw, 0.9rem);
		font-weight: 600;
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
		section {
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
		section {
			padding: 40px 40px 60px;
		}

		.swiper {
			width: 300px;
			height: 400px;
		}
	}
</style>
