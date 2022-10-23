
<script>
	import { onMount } from "svelte";
	import { randomBgColorGenerator } from "../helper/randomBgColorGenerator";
	import { colorsData } from "../helper/colorsData";
	import RandomColorGenerator from "../components/RandomColorGenerator.svelte";
	import SelectColorRange from "../components/SelectColorRange.svelte";
	import TitleInput from "../components/TitleInput.svelte";
	import { color as colorStore } from "../lib/stores/ColorStore.js";
    import NavBar from "../components/NavBar.svelte";
	$: bgColor = "bg-green-100";
	/*  $: history = ["bg-green-100"]; */
	let selectedColors = [];
	let colors = [];

	/* 	 let count = 0; */

	//getting the colors from the local storage, when the component gets mounted for the first time
	onMount(() => {
		localStorage.setItem("colors", JSON.stringify(colorsData));
		const timeOut = setTimeout(() => {
			colors = JSON.parse(localStorage.getItem("colors")) || [];
			$colorStore.loading = false;
		}, 1000);
		return () => clearTimeout(timeOut);
	});

	//clicking on color generator will generate all colors or only selected  colors
	const handleClick = () => {
		bgColor = randomBgColorGenerator(
			selectedColors.length ? selectedColors : colors
		);
		/*  history = [...history, bgColor];
		 console.log({ history }); */
	};

	// clicking on "add color range" will add the colors that are checked and alert about the selected colors
	const handleSeletedColors = () => {
		const newColors = colors.filter((item) => item.checked);
		selectedColors = newColors;
		if (selectedColors.length) {
			const colorsArray = selectedColors.map((item) => item.color);
			alert(`${colorsArray.toString()} are added as background colors`);
		} else {
			alert("No color is selected");
		}
	};
	/* const handlePrevHistory = () => {
		if (history.length > 1) {
			if (history.length-1  !== count) {
				count += 1;
				bgColor = history[history.length-1 - count];
				console.log({ count });
				console.log({bgColor});

			} else {
				alert("no more previous data!");
			}
		} else {
			alert("no more previous data!");
		}
	};
	const handleNextHistory = () => {
		if (count) {
			bgColor = history[history.length + count];
		} else {
			alert("no more next data");
		}
	}; */
</script>

<main class="pl-4  w-full p-4 border border-cyan-200">
	<section class="flex space-x-2">
		<section class="w-1/4 border border-green-200 px-2">
			<RandomColorGenerator {bgColor} on:clickingContainer={handleClick} />
		</section>
		<section class="w-3/4 pl-4 border border-gray-200 p-2">
			<TitleInput {bgColor} />
			<SelectColorRange
				{bgColor}
				{colors}
				on:selectingCheckBox={handleSeletedColors}
			/>
		</section>
	</section>
</main>