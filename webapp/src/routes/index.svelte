<script lang="ts">
	let squareYards = 0;
	let squareFeet = 0;
	let rbEstimated = 0;
	let rbApprox = 0;
	let rbBoxes = 0;
	let rbAdhesive = 0;
	let inch = 0;
	let centimeter = 0;
	let dayHours = 0;
	let nightHours = 0;
	let laborCost = 0;
	let totalCost = 0;
	let prevailingCost = 0;
	let prepArea = 0;
	let prepBags = 0;
	let prepHours = 0;

	const prevailingNight = 96.61;
	const prevailingDay = 71.8;
	const regularNight = 50;
	const regularDay = 45;

	const sqft2sqyd = (): void => {
		squareYards = squareFeet / 9;
	};
	const sqyd2sqft = (): void => {
		squareFeet = squareYards * 9;
	};

	const estimateRB = (): void => {
		rbBoxes = Math.ceil(rbEstimated / 120);
		rbApprox = rbBoxes * 120;
		rbAdhesive = Math.ceil(rbBoxes * 2.25);
	};

	const cm2in = (): void => {
		inch = centimeter / 2.54;
	};

	const in2cm = (): void => {
		centimeter = inch * 2.54;
	};

	const hourlyRate = (drate: number, dhours: number, nrate: number, nhours: number) => {
		return (dhours * drate + nhours * nrate) / (dhours + nhours);
	};
	const estimatePrevailingWage = (): void => {
		const regAvg = hourlyRate(regularDay, dayHours, regularNight, nightHours);
		const prevAvg = hourlyRate(prevailingDay, dayHours, prevailingNight, nightHours);
		const allottedHours = laborCost / regAvg;
		totalCost = allottedHours * prevAvg;
		prevailingCost = totalCost - laborCost;
	};

	const ardexFFSpreadRate = 50;
	const estimateSkim = (): void => {
		prepBags = Math.ceil(prepArea / ardexFFSpreadRate);
		if (prepBags > 0 && prepBags <= 1) prepHours = 1;
		else prepHours = prepBags * 0.68;
	};
</script>

<main>
	<form>
		<fieldset>
			<legend>Unit Conversions</legend>
			<div>
				<label for="sqft">SQFT</label>
				<input id="sqft" type="number" bind:value={squareFeet} on:change={sqft2sqyd} />
				&nbsp; ~ &nbsp;
				<label for="sqyd">SQYD</label>
				<input id="sqyd" type="number" bind:value={squareYards} on:change={sqyd2sqft} />
			</div>
			<div>
				<label for="inch">INCH</label>
				<input id="inch" type="number" bind:value={inch} on:change={in2cm} />
				&nbsp; ~ &nbsp;
				<label for="centimeter">CM</label>
				<input id="centimeter" type="number" bind:value={centimeter} on:change={cm2in} />
			</div>
		</fieldset>
		<br />
		<fieldset>
			<legend>Rubber/Vinyl Base Estimator</legend>
			<label for="lnft">LNFT</label>
			<input id="lnft" type="number" bind:value={rbEstimated} on:change={estimateRB} />
			<br />
			<span>Box Qty: {rbBoxes} bx</span>
			<br />
			<span>Adhesive: {rbAdhesive} ea</span>
			<br />
			<span>Approx: {rbApprox} lf</span>
		</fieldset>
		<br />
		<fieldset>
			<legend>Prevailing Wage Estimate</legend>
			<label for="laborCost">Labor Cost</label>
			<input
				id="laborCost"
				type="number"
				bind:value={laborCost}
				on:change={estimatePrevailingWage}
			/>
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
			<span id="prevailingCost">${prevailingCost.toFixed(2)}</span>
			<br />
			<label for="totalCost">Total Cost:</label>
			<span id="totalCost">${totalCost.toFixed(2)}</span>
		</fieldset>
		<br />
		<fieldset>
			<legend>Standard 1/16" Skim Estimate</legend>
			<label for="area">SF</label>
			<input id="area" type="number" bind:value={prepArea} on:change={estimateSkim} />
			<br />
			<label for="hours">Hours: </label>
			<span id="hours">{prepHours}</span>
			<br />
			<label for="bags">Bags: </label>
			<span id="bags">{prepBags}</span>
		</fieldset>
	</form>
</main>

<style>
	main {
		line-height: 2;
	}
	fieldset {
		width: 50%;
	}
</style>
