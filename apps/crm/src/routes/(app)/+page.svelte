<script>
	import Home from '$lib/Home.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	export let data;

</script>

<section class="section-process text-7xl md:text-8xl lg:text-9xl font-blackops">
	<div class="section-container">
		<div class="process-steps-container container-medium with-padding">
			<div class="process-step-container process-step-1">
				<div class="process-step-title-container">
					<h1 class="process-step-title">Plan</h1>
					<div class="process-step-title-overlay">Plan</div>
				</div>
			</div>
			<div class="process-step-container process-step-2">
				<div class="process-step-title-container">
					<h1 class="process-step-title">Do</h1>
					<div class="process-step-title-overlay">Do</div>
				</div>
			</div>
			<div class="process-step-container process-step-3">
				<div class="process-step-title-container">
					<h1 class="process-step-title">Repeat</h1>
					<div class="process-step-title-overlay">Repeat</div>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="mt-16 flex flex-col gap-4">
	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>

		<Button href="/private" class="w-fit bg-slate-400">Dashboard</Button>
		<form action="/auth/logout" method="POST">
			<Button type="submit" class="bg-red-400">Logout</Button>
		</form>
	{:else}
		<Button href="/auth/login" class="bg-sky-400 w-fit">Login</Button>
	{/if}
</div>

<style>
	.section-process {
		--gradient-color-1: #ef008f;
		--gradient-color-2: #6ec3f4;
		--gradient-color-3: #7038ff;
		--gradient-color-4: #c9c9c9;
	}

	.section-process .process-steps-container .process-step-container .process-step-title-container {
		margin-top: -16px;
		position: relative;
	}

	.section-process
		.process-steps-container
		.process-step-container
		.process-step-title-container
		.process-step-title,
	.section-process
		.process-steps-container
		.process-step-container
		.process-step-title-container
		.process-step-title-overlay {
		font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
			Arial, sans-serif;
		/* font-size: 156px; */
		font-weight: 900;
		margin: 0;
		line-height: 1.2em;
		letter-spacing: -4px;
	}

	.section-process
		.process-steps-container
		.process-step-container
		.process-step-title-container
		.process-step-title-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: auto;
		padding-right: 30px;
		height: 100%;
		opacity: 1;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
	}

	.section-process
		.process-steps-container
		.process-step-container.process-step-1
		.process-step-title-overlay {
		background-image: linear-gradient(90deg, var(--gradient-color-1), var(--gradient-color-2));
		animation: animated-gradient-title-1 8s infinite;
	}

	.section-process
		.process-steps-container
		.process-step-container.process-step-2
		.process-step-title-overlay {
		background-image: linear-gradient(90deg, var(--gradient-color-2), var(--gradient-color-3));
		animation: animated-gradient-title-2 8s infinite;
	}

	.section-process
		.process-steps-container
		.process-step-container.process-step-3
		.process-step-title-overlay {
		background-image: linear-gradient(90deg, var(--gradient-color-3), var(--gradient-color-1));
		animation: animated-gradient-title-3 8s infinite;
	}

	@keyframes animated-gradient-title-1 {
		0%,
		16.667%,
		100% {
			opacity: 1;
		}
		33.333%,
		83.333% {
			opacity: 0;
		}
	}

	@keyframes animated-gradient-title-2 {
		0%,
		16.667%,
		66.667%,
		100% {
			opacity: 0;
		}
		33.333%,
		50% {
			opacity: 1;
		}
	}

	@keyframes animated-gradient-title-3 {
		0%,
		50%,
		100% {
			opacity: 0;
		}
		66.667%,
		83.333% {
			opacity: 1;
		}
	}
</style>
