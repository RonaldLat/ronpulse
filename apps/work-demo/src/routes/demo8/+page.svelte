<script>
	import Swiper from 'swiper';
	import { onMount } from 'svelte';

	onMount(() => {
		let swiper = new Swiper('.swiper-container-h', {
			speed: 1500,
			autoplay: {
				delay: 5000
			},
			parallax: true,
			mousewheel: true,
			loop: true,

			on: {
				init: function () {
					let swiper = this;
					for (var i = 0; i < swiper.slides.length; i++) {
						// $(swiper.slides[i])
						console.log(swiper.slides[2].querySelector('.slide-bg'));

						swiper.slides[i]
							.querySelector('.slide-bg')
							.setAttribute('data-swiper-parallax', `${0.75 * swiper.width}`);
					}
				},
				resize: function () {
					this.update();
				}
			},

			pagination: {
				el: '.creative-showcase--slider .swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return (
						'<span class="' +
						className +
						'">' +
						'<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
						'<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
						'stroke-opacity="1" stroke-width="1px"></circle>' +
						'<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
						'</svg></span>'
					);
				}
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	});
</script>

<section class="creative-showcase--slider">
	<div class="banner-horizental">
		<div class="swiper swiper-container-h">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div
						class="slide-bg overlay-dark"
						style="background-image: url(https://imgpanda.com/upload/ib/Dq6nW0PfHw.jpg);"
						data-swiper-parallax="1152"
					>
						<div class="slide-container">
							<div class="slide-row">
								<div class="slider-content">
									<h6 class="slide-subtitle" data-swiper-parallax="-1000">© Creative Salahu</h6>
									<h1 class="slide-heading" data-swiper-parallax="-2000">
										<a href="https://www.fiverr.com/aliali44"><span>Retouch Photo</span></a>
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div
						class="slide-bg overlay-dark"
						style="background-image: url(https://imgpanda.com/upload/ib/U9UMoxlftu.jpg);"
						data-swiper-parallax="1152"
					>
						<div class="slide-container">
							<div class="slide-row">
								<div class="slider-content">
									<h6 class="slide-subtitle" data-swiper-parallax="-1000">© Creative Salahu</h6>
									<h1 class="slide-heading">
										<a href="https://www.fiverr.com/aliali44">
											<span data-swiper-parallax="-2000">Earthmade</span>
											<br />
											<span data-swiper-parallax="-3000">Aroma box</span>
										</a>
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div
						class="slide-bg overlay-light"
						style="background-image: url(https://imgpanda.com/upload/ib/KQo1P7TUsO.jpg);"
						data-swiper-parallax="1152"
					>
						<div class="slide-container">
							<div class="slide-row">
								<div class="slider-content">
									<h6 class="slide-subtitle" data-swiper-parallax="-1000">© Creative Salahu</h6>
									<h1 class="slide-heading">
										<a href="https://www.fiverr.com/aliali44">
											<span data-swiper-parallax="-2000">Access Bank</span>
											<br />
											<span data-swiper-parallax="-3000">Rebranding</span>
										</a>
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div
						class="slide-bg overlay-dark"
						style="background-image: url(https://imgpanda.com/upload/ib/9wQSdB4EDc.jpg);"
						data-swiper-parallax="1152"
					>
						<div class="slide-container">
							<div class="slide-row">
								<div class="slider-content">
									<h6 class="slide-subtitle" data-swiper-parallax="-1000">© Creative Salahu</h6>
									<h1 class="slide-heading" data-swiper-parallax="-2000">
										<a href="https://www.fiverr.com/aliali44"><span>The joy of music</span></a>
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div
						class="slide-bg overlay-dark"
						style="background-image: url(https://imgpanda.com/upload/ib/2uqQEaCPCE.jpg);"
						data-swiper-parallax="1152"
					>
						<div class="slide-container">
							<div class="slide-row">
								<div class="slider-content">
									<h6 class="slide-subtitle" data-swiper-parallax="-1000">© Creative Salahu</h6>
									<h1 class="slide-heading" data-swiper-parallax="-2000">
										<a href="https://www.fiverr.com/aliali44"><span>Blue Adobe MAX</span></a>
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div
						class="slide-bg overlay-dark"
						style="background-image: url(https://imgpanda.com/upload/ib/omWbFA05vr.jpg);"
						data-swiper-parallax="1152"
					>
						<div class="slide-container">
							<div class="slide-row">
								<div class="slider-content">
									<h6 class="slide-subtitle" data-swiper-parallax="-1000">© Creative Salahu</h6>
									<h1 class="slide-heading" data-swiper-parallax="-2000">
										<a href="https://www.fiverr.com/aliali44"><span>Carved Wood</span></a>
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div
						class="slide-bg overlay-dark"
						style="background-image: url(https://imgpanda.com/upload/ib/gCzPpwgzAw.png);"
						data-swiper-parallax="1152"
					>
						<div class="slide-container">
							<div class="slide-row">
								<div class="slider-content">
									<h6 class="slide-subtitle" data-swiper-parallax="-1000">© Creative Salahu</h6>
									<h1 class="slide-heading">
										<a href="https://www.fiverr.com/aliali44">
											<span data-swiper-parallax="-2000">Abstract</span>
											<br />
											<span data-swiper-parallax="-3000">Animation Video</span>
										</a>
									</h1>
								</div>
							</div>
						</div>
						<div class="video-container">
							<video autoplay="" loop="" muted="" baba-icon="yes">
								<source
									src="https://ui-themez.smartinnovates.net/items/infolio/Infolio/assets/imgs/works/full/vid.mp4"
									type="video/mp4"
								/>
							</video>
						</div>
					</div>
				</div>
			</div>
			<div class="swiper-button-wrapper creative-button--wrapper">
				<div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide">
					<div>
						<span>Next Slide</span>
					</div>
					<div><i class="fas fa-chevron-right"></i></div>
				</div>
				<div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide">
					<div><i class="fas fa-chevron-left"></i></div>
					<div>
						<span>Prev Slide</span>
					</div>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	body {
		font-size: 17px;
		line-height: 30px;
		font-weight: 400;
		-moz-osx-font-smoothing: grayscale;
		word-break: break-word;
		-webkit-font-smoothing: antialiased;
		font-family: 'Poppins', sans-serif;
		margin: 0;
		overflow-x: hidden;
		color: #fff;
		background-color: #1a1a1a;
	}
	body,
	div {
		margin: 0;
		padding: 0;
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	img {
		-ms-interpolation-mode: bicubic;
		border: 0;
		vertical-align: middle;
		max-width: 100%;
		height: auto;
	}
	/* ============ Full Page Slider ================= */
	.creative-showcase--slider .swiper-slide {
		position: relative;
		overflow: hidden;
		width: 100%;
		min-height: 100vh;
		padding: 80px 0;
	}
	.creative-showcase--slider .swiper-slide .slide-bg {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.creative-showcase--slider .swiper-slide .overlay-dark:before {
		opacity: 0.3;
		background: #1d1d1d;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 1;
		pointer-events: none;
	}
	.creative-showcase--slider .swiper-slide .video-container {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.creative-showcase--slider .swiper-slide .video-container video {
		width: 100%;
		height: 100%;
		-o-object-fit: cover;
		object-fit: cover;
		-o-object-position: center center;
		object-position: center center;
	}
	.swiper-slide .slide-bg .slide-container {
		max-width: 1320px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		position: relative;
		z-index: 7;
		padding-left: 15px;
		padding-right: 15px;
	}
	.slide-bg .slide-container .slide-row {
		display: flex;
		flex-wrap: wrap;
	}
	.slide-container .slide-row .slider-content {
		flex: 0 0 auto;
		width: 91.66666667%;
		margin-left: 8.33333333%;
		padding-left: 15px;
		padding-right: 15px;
	}

	.slider-content .slide-subtitle {
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: #fff;
		font-weight: 500;
		line-height: 1.3;
		margin-bottom: 30px;
		margin-top: 0px;
	}
	.slider-content .slide-heading {
		font-size: 100px;
		color: #fff;
		margin: 0px;
		font-weight: 500;
		line-height: 1.3;
		margin-bottom: 0.2rem;
	}
	.slider-content .slide-heading a {
		text-decoration: none;
		color: #fff;
		outline: none;
	}
	.slider-content .slide-heading a span {
		display: inline-block;
	}
	.overlay-light .slider-content .slide-heading a {
		color: #000;
	}
	.overlay-light .slider-content .slide-subtitle {
		color: #000;
	}
	.creative-showcase--slider .creative-button--wrapper .swiper-button-prev,
	.creative-showcase--slider .creative-button--wrapper .swiper-button-next {
		position: absolute;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		top: auto;
		color: #fff;
		z-index: 9;
		cursor: pointer;
		width: auto;
		bottom: 30px;
		font-weight: 300;
		font-size: 16px;
		letter-spacing: 0.5px;
		line-height: normal;
	}
	.creative-showcase--slider .creative-button--wrapper .swiper-button-next {
		right: 120px;
	}
	.creative-showcase--slider .creative-button--wrapper .swiper-button-prev {
		left: 120px;
	}
	.creative-showcase--slider .creative-button--wrapper .swiper-button-next:after,
	.creative-showcase--slider .creative-button--wrapper .swiper-button-prev:after {
		display: none;
	}
	.creative-showcase--slider .creative-button--wrapper .swiper-button-prev i {
		margin-right: 25px;
	}
	.creative-showcase--slider .creative-button--wrapper .swiper-button-next i {
		margin-left: 25px;
	}
	.creative-showcase--slider .banner-horizental .swiper-pagination {
		bottom: 40px;
		left: 50%;
		-webkit-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		transform: translateX(-50%);
		width: auto;
	}
	.creative-showcase--slider .banner-horizental .swiper-pagination-bullet {
		background: transparent;
		margin: 0 10px !important;
	}
	.creative-showcase--slider .banner-horizental .path {
		display: none;
	}
	.creative-showcase--slider .banner-horizental .swiper-pagination-bullet-active .path {
		display: inline-block !important;
		stroke-dasharray: 1000;
		stroke-dashoffset: 0;
		-webkit-animation: dash linear 10s;
		animation: dash linear 10s;
		-webkit-animation-iteration-count: unset;
		animation-iteration-count: unset;
	}
	@keyframes dash {
		0% {
			stroke-dashoffset: 1000;
		}

		100% {
			stroke-dashoffset: 0;
		}
	}
	/* ====================== Responsive Ipad =============================== */
	@media (max-width: 991px) {
		.slide-container .slide-row .slider-content {
			flex: 0 0 auto;
			width: 100%;
			margin-left: 0px;
		}
		.slider-content .slide-heading {
			font-size: 72px;
		}
		.creative-showcase--slider .banner-horizental .swiper-pagination {
			display: none;
		}
		.creative-showcase--slider .creative-button--wrapper .swiper-button-prev {
			left: 15px;
		}
		.creative-showcase--slider .creative-button--wrapper .swiper-button-next {
			right: 15px;
		}
	}

	/* ====================== Responsive Iphone =============================== */
	@media screen and (max-width: 767px) {
		.slide-container .slide-row .slider-content {
			padding-left: 0px;
			padding-right: 0px;
		}
		.slider-content .slide-heading {
			font-size: 40px;
		}
		.slider-content .slide-subtitle {
			margin-bottom: 15px;
		}
	}
</style>
