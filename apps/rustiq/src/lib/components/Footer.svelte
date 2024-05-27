<script>
	import Logo from "./Logo.svelte";

	let className = '';
	export { className as class };
</script>

<footer class="w-full mx-auto  shadow dark:bg-gray-900   {className}">
	<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
		<div class="sm:flex sm:items-center sm:justify-between gap-5">
			<a href="/" class="flex flex-row justify-between items-center w-full  mb-4 sm:mb-0">
                <Logo class="h-9   w-fit mr-4"/>
				<span class="font-ubuntu self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
					>Rustiq Home</span
				>
			</a>
			<ul
				class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 hidden"
			>
				<li>
					<a href="#" class="mr-4 hover:underline md:mr-6">About</a>
				</li>
				<li>
					<a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
				</li>
				<li>
					<a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
				</li>
				<li>
					<a href="#" class="hover:underline">Contact</a>
				</li>
			</ul>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<span class="block text-sm text-gray-500 text-xs sm:text-center dark:text-gray-400"
			>© 2024 <a href="https://ronaldotieno.netlify.com" target="_blank" class="hover:underline  whitespace-nowrap">RustiqHome™ by <span class="text-sky-300 font-ubuntu hover:cursor-pointer">Ronald Otieno.</span></a>   <span
		>
	</div>
</footer>
