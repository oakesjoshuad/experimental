<script lang="ts">
	let squareFeet = 0;
	let squareYards = 0;
	let inches = 0;
	let centimeters = 0;

	const sqft2sqyd = (): void => {
		squareYards = squareFeet / 9;
	};
	const sqyd2sqft = (): void => {
		squareFeet = squareYards * 9;
	};
	const in2cm = (): void => {
		centimeters = inches * 2.54;
	};
	const cm2in = (): void => {
		inches = centimeters / 2.54;
	};
</script>

<form on:submit|preventDefault>
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
			<input id="inch" type="number" bind:value={inches} on:change={in2cm} />
			&nbsp; ~ &nbsp;
			<label for="centimeter">CM</label>
			<input id="centimeter" type="number" bind:value={centimeters} on:change={cm2in} />
		</div>
	</fieldset>
</form>
