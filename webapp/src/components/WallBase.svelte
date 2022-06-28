<script lang="ts">
	let rbEstimated = 0;
	let rbAdhesive = 0;
	let rbApprox = 0;
	let rbBoxes = 0;

	const estimateRB = (): void => {
		rbBoxes = Math.ceil(rbEstimated / 120);
		rbApprox = rbBoxes * 120;
		rbAdhesive = Math.round(rbBoxes * 2.1);
	};
</script>

<form on:submit|preventDefault>
	<fieldset>
		<legend>Wall Base Estimator</legend>
		<label for="lnft">LNFT</label>
		<input id="lnft" type="number" bind:value={rbEstimated} on:change={estimateRB} />
		<br />
		<span>Box Qty: {rbBoxes} bx</span>
		<br />
		<span>Adhesive: {rbAdhesive} ea</span>
		<br />
		<span>Approx: {rbApprox} lf</span>
	</fieldset>
</form>
