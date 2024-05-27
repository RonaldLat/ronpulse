<script lang="ts">
	export let src: string
	export let alt: string
</script>

<div>
<img class="rounded-md" {src} {alt} loading="lazy" />
</div>
