<script>
	import { GradientHeading } from '@repo/ui';
</script>

<section>
	<p class="btn">the bakeries</p>
	<p class="card">the bakeries</p>
</section>
<div>
	<body class="bg-gray-50 cs-font">
		<div id="wrapper" class="grid grid-cols-1 xl:grid-cols-2 xl:h-screen">
			<div id="col-1" class="bg-blue-900 px-12 pt-32 pb-40 md:px-32 xl:py-64 xl:px-32">
				<h1 class="text-blue-500 font-extrabold text-4xl md:text-6xl">
					The <br />
					TailwindCSS <br />
					Project
				</h1>
				<p class="text-white text-normal md:text-3xl pt-3 md:pt-6 font-medium">
					Lorem ipsum dolor sit amet.
				</p>
			</div>
			<div id="col-2" class="px-3 md:px-20 xl:py-64 xl:px-12">
				<div
					id="cards"
					class="rounded-lg flex border py-5 px-6 md:py-8 md:px-16 -mt-6 bg-white xl:-ml-24 xl:pl-8 xl:rounded-xl"
				>
					<div id="circle" class="w-8 h-8 bg-blue-500 md:w-16 md:h-16 rounded-full"></div>
					<p class="pl-4 md:pl-12 text-base pt-1 font-semibold md:text-2xl md:pt-4">
						“It’s truly awesome, man!”
					</p>
				</div>

				<div
					id="cards"
					class="rounded-lg flex border py-5 px-6 md:py-8 md:px-16 mt-6 md:mt-12 bg-white xl:pl-8 xl:rounded-xl"
				>
					<div id="circle" class="w-8 h-8 bg-blue-500 md:w-16 md:h-16 rounded-full"></div>
					<p class="pl-4 md:pl-12 text-base pt-1 font-semibold md:text-2xl md:pt-4">
						“It’s truly awesome, man!”
					</p>
				</div>
			</div>
		</div>
	</body>
</div>

<section class="bg-gray-900 text-white">
	<div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
		<div class="mx-auto max-w-3xl text-center">
			<h1
				class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
			>
				Understand User Flow.

				<span class="sm:block"> Increase Conversion. </span>
			</h1>

			<p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
				numquam ea!
			</p>

			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<a
					class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
					href="#"
				>
					Get Started
				</a>

				<a
					class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
					href="#"
				>
					Learn More
				</a>
			</div>
		</div>
	</div>
</section>

<GradientHeading />
<GradientHeading>This is a gradient heading imported package</GradientHeading>
