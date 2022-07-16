<script lang="ts">
	let squareFeet = '';
	let squareYards = '';
	let inches = '';
	let centimeters = '';

	const sqft2sqyd = (): void => {
		squareYards = (Number(squareFeet) / 9).toFixed(2);
	};
	const sqyd2sqft = (): void => {
		squareFeet = (Number(squareYards) * 9).toFixed(2);
	};
	const in2cm = (): void => {
		centimeters = (Number(inches) * 2.54).toFixed(2);
	};
	const cm2in = (): void => {
		inches = (Number(centimeters) / 2.54).toFixed(2);
	};
</script>

<form on:submit|preventDefault>
	<fieldset>
		<legend>Unit Conversions</legend>
		<div>
			<label for="sqft">SQFT</label>
			<input id="sqft" type="text" bind:value={squareFeet} on:change={sqft2sqyd} />
			&nbsp; ~ &nbsp;
			<label for="sqyd">SQYD</label>
			<input id="sqyd" type="text" bind:value={squareYards} on:change={sqyd2sqft} />
		</div>
		<div>
			<label for="inch">INCH</label>
			<input id="inch" type="text" bind:value={inches} on:change={in2cm} />
			&nbsp; ~ &nbsp;
			<label for="centimeter">CM</label>
			<input id="centimeter" type="text" bind:value={centimeters} on:change={cm2in} />
		</div>
	</fieldset>
</form>

<style>
	input[type='text'] {
		box-sizing: 10px;
	}
</style>
