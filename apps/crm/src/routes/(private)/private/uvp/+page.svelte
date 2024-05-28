<script>
	import { enhance } from '$app/forms';
	import Label from '$lib/components/ui/label/label.svelte';
	import * as Table from '$lib/components/ui/table';

	export let form;
	export let data;
	console.log(data);
	$: {
		console.log(form, data);
	}

	const invoices = [
		{
			invoice: 'INV001',
			paymentStatus: 'Paid',
			totalAmount: '$250.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV002',
			paymentStatus: 'Pending',
			totalAmount: '$150.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV003',
			paymentStatus: 'Unpaid',
			totalAmount: '$350.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV004',
			paymentStatus: 'Paid',
			totalAmount: '$450.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV005',
			paymentStatus: 'Paid',
			totalAmount: '$550.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV006',
			paymentStatus: 'Pending',
			totalAmount: '$200.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV007',
			paymentStatus: 'Unpaid',
			totalAmount: '$300.00',
			paymentMethod: 'Credit Card'
		}
	];
</script>

<h1 class="font-semibold text-2xl text-center mb-5">Enter New Lead's Details</h1>
<form
	method="POST"
	action="?/uvp"
	enctype="multipart/form-data"
	class="max-w-md mx-auto flex flex-col gap-2"
	use:enhance
>
	<Label for="name">Business Name</Label>
	<input type="text" name="name" class="dark:bg-gray-200" />
	<Label for="initials">Initials</Label>
	<input type="text" name="initials" class="dark:bg-gray-200" />
	<Label for="logo_url">Logo</Label>
	<input type="file" name="logo_url" class="dark:bg-gray-200" />
	<Label for="phone_number">Phone Number</Label>
	<input type="text" name="phone_number" class="dark:bg-gray-200" />
	<Label for="slogan">Slogan</Label>
	<input type="text" name="slogan" class="dark:bg-gray-200" />
	<button type="submit">Save</button>
</form>

<div class="max-w-screen bg-sky-50">
	<h2 class="text-3xl text-center my-6 font-semibold underline underline-offset-4">On the list</h2>
	<Table.Root>
		<Table.Caption>A list of your recent invoices.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">Invoice</Table.Head>
				<Table.Head>Status</Table.Head>
				<Table.Head>Method</Table.Head>
				<Table.Head class="text-right">Amount</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each invoices as invoice, i (i)}
				<Table.Row>
					<Table.Cell class="font-medium">{invoice.invoice}</Table.Cell>
					<Table.Cell>{invoice.paymentStatus}</Table.Cell>
					<Table.Cell>{invoice.paymentMethod}</Table.Cell>
					<Table.Cell class="text-right">{invoice.totalAmount}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	input {
		margin-bottom: 1rem;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		background-color: #007bff;
		color: #fff;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
</style>
