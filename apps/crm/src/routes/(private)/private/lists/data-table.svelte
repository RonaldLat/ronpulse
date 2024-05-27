<script lang="ts">
	import { Render, Subscribe, createRender, createTable } from 'svelte-headless-table';
	import {
		addHiddenColumns,
		addPagination,
		addSelectedRows,
		addSortBy,
		addTableFilter
	} from 'svelte-headless-table/plugins';
	import { readable, writable } from 'svelte/store';
	import ArrowUpDown from 'lucide-svelte/icons/arrow-up-down';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import Actions from './data-table-actions.svelte';
	import DataTableCheckbox from './data-table-checkbox.svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import { Slider } from '$lib/components/ui/slider/index.js';

	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { cn } from '$lib/utils.js';
	import { Input } from '$lib/components/ui/input/index.js';

	export let leads;
	export let count;
	console.log('datatable',leads)

	type Lead = {
		business_id: string;
		name: string;
		phone_number: number;
		website: string;
		review_count: number;
	};

	const data: Lead = leads;

	const table = createTable(readable(data), {
		sort: addSortBy({ disableMultiSort: true }),
		page: addPagination({ serverSide: true, serverItemCount: writable(count) }),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.includes(filterValue)
		}),
		select: addSelectedRows(),
		hide: addHiddenColumns()
	});

	const columns = table.createColumns([
		table.column({
			header: (_, { pluginStates }) => {
				const { allPageRowsSelected } = pluginStates.select;
				return createRender(DataTableCheckbox, {
					checked: allPageRowsSelected
				});
			},
			accessor: 'business_id',
			cell: ({ row }, { pluginStates }) => {
				const { getRowState } = pluginStates.select;
				const { isSelected } = getRowState(row);

				return createRender(DataTableCheckbox, {
					checked: isSelected
				});
			},
			plugins: {
				sort: {
					disable: true
				},
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			header: 'Reviews',
			accessor: 'review_count',
			plugins: { sort: { disable: true }, filter: { exclude: true } }
		}),
		table.column({
			header: 'Name',
			accessor: 'name',
			cell: ({ value }) => value.toLowerCase(),
			plugins: {
				filter: {
					getFilterValue(value) {
						return value.toLowerCase();
					}
				},
				sort: {
					//disabled: false
				}
			}
		}),
		table.column({
			header: 'Phone',
			accessor: 'phone_number',
			plugins: {
				filter: {
					exclude: false
				}
			}
		}),
		table.column({
			header: 'Website',
			accessor: 'website',
			cell: ({ value }) => {
				if (value) {
					return value.toLowerCase();
				}
				return '';
			},
			plugins: {
				filter: {
					getFilterValue(value) {
						if (value) {
							return value.toLowerCase();
						}
						return '';
					}
				}
			}
		}),
		table.column({
			header: 'City',
			accessor: 'city',
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			header: 'Niche',
			accessor: 'types',
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			header: 'Verified',
			accessor: 'verified',
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			header: '',
			accessor: ({ id }) => id,
			cell: (item) => {
				return createRender(Actions, { id: item.value });
			},
			plugins: {
				sort: {
					disable: true
				}
			}
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, flatColumns, pluginStates, rows } =
		table.createViewModel(columns);

	const { sortKeys } = pluginStates.sort;

	const { hiddenColumnIds } = pluginStates.hide;
	const ids = flatColumns.map((c) => c.id);
	let hideForId = Object.fromEntries(ids.map((id) => [id, true]));

	$: $hiddenColumnIds = Object.entries(hideForId)
		.filter(([, hide]) => !hide)
		.map(([id]) => id);

	let {
		hasNextPage,
		hasPreviousPage,
		pageIndex,
		pageSize,
		pageCount,
		serverSide,
		serverItemCount
	} = pluginStates.page;

	const { filterValue } = pluginStates.filter;

	const { selectedDataIds } = pluginStates.select;

	const hideableCols = ['review_count', 'name', 'website', 'city', 'verified', 'niche'];
	//$pageSize = 10;

	console.log('countx', count);
</script>

<div class="w-full bg-slat-200 border rounded-sm px-5">
	<div class="flex items-center py-4">
		<Input
			class="max-w-sm"
			placeholder="Filter name, phone, website..."
			type="text"
			bind:value={$filterValue}
		/>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button variant="outline" class="ml-auto" builders={[builder]}>
					Columns <ChevronDown class="ml-2 h-4 w-4" />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{#each flatColumns as col}
					{#if hideableCols.includes(col.id)}
						<DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
							{col.header}
						</DropdownMenu.CheckboxItem>
					{/if}
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
	<div class="w-full py-8 flex items-center gap-5">
		<label for="page-size">Page size {$pageSize}</label>
		<input
			id="page-size"
			type="range"
			bind:value={$pageSize}
			max={$rows.length}
			step={5}
			class="max-w-sm w-full text-black appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-300 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[25px] [&::-webkit-slider-thumb]:w-[25px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-myColor-500"
		/>
	</div>
	<div class="rounded-md border">
		<Table.Root {...$tableAttrs}>
			<Table.Header>
				{#each $headerRows as headerRow}
					<Subscribe rowAttrs={headerRow.attrs()}>
						<Table.Row>
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
									<Table.Head {...attrs} class={cn('[&:has([role=checkbox])]:pl-3 text-black')}>
										{#if cell.id === 'data.phone_number'}
											<div class="text-right font-medium">
												<Render of={cell.render()} />
											</div>
										{:else if cell.id === 'website'}
											<Button variant="ghost" on:click={props.sort.toggle}>
												<Render of={cell.render()} />
												<ArrowUpDown
													class={cn(
														$sortKeys[0]?.id === cell.id && 'text-foreground',
														'ml-2 h-4 w-4'
													)}
												/>
											</Button>
										{:else if cell.id === 'verified'}
											<Button variant="ghost" on:click={props.sort.toggle}>
												<Render of={cell.render()} />
												<ArrowUpDown
													class={cn(
														$sortKeys[0]?.id === cell.id && 'text-foreground',
														'ml-2 h-4 w-4'
													)}
												/>
											</Button>
										{:else if cell.id === 'name'}
											<Button variant="ghost" on:click={props.sort.toggle}>
												<Render of={cell.render()} />
												{#if props.sort.order === 'asc'}
													⬇️
												{:else if props.sort.order === 'desc'}
													⬆️
												{/if}
												<ArrowUpDown
													class={cn(
														$sortKeys[0]?.id === cell.id && 'text-foreground',
														'ml-2 h-4 w-4'
													)}
												/>
											</Button>
										{:else}
											<Render of={cell.render()} />
										{/if}
									</Table.Head>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Header>
			<Table.Body {...$tableBodyAttrs}>
				{#each $pageRows as row (row.id)}
					<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
						<Table.Row {...rowAttrs} data-state={$selectedDataIds[row.id] && 'selected'}>
							{#each row.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs>
									<Table.Cell class="[&:has([role=checkbox])]:pl-3" {...attrs}>
										{#if cell.id === 'amount'}
											<div class="text-right font-medium">
												<Render of={cell.render()} />
											</div>
										{:else if cell.id === 'types'}
											<div class="capitalize">
												<Render of={cell.render()} />
											</div>
										{:else}
											<Render of={cell.render()} />
										{/if}
									</Table.Cell>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<div class="flex items-center justify-end space-x-2 py-4">
		<div class="flex-1 text-sm text-muted-foreground">
			{Object.keys($selectedDataIds).length} of {$rows.length} row(s) selected.
		</div>
		<Button
			variant="outline"
			size="sm"
			on:click={() => ($pageIndex = $pageIndex - 1)}
			disabled={!$hasPreviousPage}>Previous</Button
		>
		<Button
			variant="outline"
			size="sm"
			disabled={!$hasNextPage}
			on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
		>
	</div>
	<p class="text-sm text-gray-800">Page {$pageIndex + 1} out of {$pageCount}</p>
	<div class="mx-auto flex flex-cols items-center justistify-center w-full"></div>
</div>
