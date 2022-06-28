<script lang="ts">
	let prepArea = 0;
	let prepBags = 0;
	let prepHours = 0;

	const ardexFFSpreadRate = 50;
	const estimateSkim = (): void => {
		prepBags = Math.ceil(prepArea / ardexFFSpreadRate);
		if (prepBags > 0 && prepBags <= 1) prepHours = 1;
		else prepHours = prepBags * 0.68;
	};
</script>

<form on:submit|preventDefault>
	<fieldset>
		<legend>Standard 0/16" Skim Estimate</legend>
		<label for="area">SF</label>
		<input id="area" type="number" bind:value={prepArea} on:change={estimateSkim} />
		<br />
		<label for="hours">Hours: </label>
		<span id="hours">{prepHours.toFixed(1)}</span>
		<br />
		<label for="bags">Bags: </label>
		<span id="bags">{prepBags}</span>
	</fieldset>
</form>
