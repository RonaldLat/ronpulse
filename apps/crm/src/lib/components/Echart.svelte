<script>
	import * as echarts from 'echarts';
	import { onMount } from 'svelte';

	let chartDom;
	onMount(() => {
		let myChart = echarts.init(chartDom);
		let option;

		option = {
			title: {
				text: 'ECharts Getting Started Example'
			},
			tooltip: {},
			legend: {
				data: ['sales']
			},
			xAxis: {
				data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
			},
			yAxis: {},
			series: [
				{
					name: 'sales',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}
			]
		};

		option && myChart.setOption(option);
	});
</script>




<div bind:this={chartDom} id="main" style="width: 600px;height:400px;"></div>
