<script lang="ts">
	import UnitConversions from '../components/UnitConversions.svelte';
	import WallBase from '../components/WallBase.svelte';
	import PrevailingWage from '../components/PrevailingWage.svelte';
	import StandardSkim from '../components/StandardSkim.svelte';
	import CarpetAdhesive from '../components/CarpetAdhesive.svelte';
</script>

<main>
	<UnitConversions />
	<WallBase />
	<PrevailingWage />
	<StandardSkim />
	<CarpetAdhesive />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 10px 20px;
		line-height: 1.8;
	}
</style>
