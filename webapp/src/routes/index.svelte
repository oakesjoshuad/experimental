<script lang="ts">
	import UnitConversions from '../components/UnitConversions.svelte';
	import WallBase from '../components/WallBase.svelte';
	import PrevailingWage from '../components/PrevailingWage.svelte';
	import StandardSkim from '../components/StandardSkim.svelte';
</script>

<main>
	<UnitConversions />
	<WallBase />
	<PrevailingWage />
	<StandardSkim />
</main>

<style>
	main {
		line-height: 1.8;
	}
</style>
