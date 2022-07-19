<script lang="ts">
	let laborCost = 0;
	let dayHours = 0;
	let nightHours = 0;
	let regularDay = 45;
	let regularNight = 50;
	let prevailingDay = 71.8;
	let prevailingNight = 96.61;
	let prevailingCost = '';
	let totalCost = '';

	const hourlyRateAvg = (drate: number, dhours: number, nrate: number, nhours: number): number => {
		return (dhours * drate + nhours * nrate) / (dhours + nhours);
	};

	const estimatePrevailingWage = (): void => {
		const regAvg = hourlyRateAvg(regularDay, dayHours, regularNight, nightHours);
		const prevAvg = hourlyRateAvg(prevailingDay, dayHours, prevailingNight, nightHours);
		const allottedHours = laborCost / regAvg;
		let pcost = allottedHours * prevAvg;
		totalCost = pcost.toFixed(2);
		prevailingCost = (pcost - laborCost).toFixed(2);
	};
</script>

<form on:submit|preventDefault>
	<fieldset>
		<legend>Prevailing Wage Estimate</legend>
		<label for="laborCost">Labor Cost:</label>
		<input id="laborCost" type="number" bind:value={laborCost} on:change={estimatePrevailingWage} />
		<br />
		<label for="dayHours">Daytime Hours:</label>
		<input id="dayHours" type="number" bind:value={dayHours} on:change={estimatePrevailingWage} />
		<span>Rate: ${prevailingDay.toFixed(2)}</span>
		<br />
		<label for="nightHours">Night Hours:</label>
		<input
			id="nightHours"
			type="number"
			bind:value={nightHours}
			on:change={estimatePrevailingWage}
		/>
		<span>Rate: ${prevailingNight.toFixed(2)}</span>
		<br />
		<label for="prevailingCost">Prevailing Wage Premium:</label>
		<span id="prevailingCost">${prevailingCost}</span>
		<br />
		<label for="totalCost">Total Cost:</label>
		<span id="totalCost">${totalCost}</span>
	</fieldset>
</form>
