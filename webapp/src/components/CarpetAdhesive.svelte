<script lang="ts">
	let sqft = '';
	let estimatedQTY = '';
	let TwoKPlusCoverage = 350 * 4;

	const estimate2000Plus = (): void => {
		estimatedQTY = Math.ceil(Number(sqft) / TwoKPlusCoverage).toFixed(2);
	};
</script>

<form on:submit|preventDefault>
	<fieldset>
		<legend>2000 Plus Carpet Adhesive Estimator</legend>
		<label for="sqft">SQFT</label>
		<input id="sqft" type="text" bind:value={sqft} on:change={estimate2000Plus} />
		<br />
		<span>Unit Qty: {estimatedQTY}</span>
	</fieldset>
</form>
