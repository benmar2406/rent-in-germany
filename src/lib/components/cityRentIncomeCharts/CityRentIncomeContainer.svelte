<script>
    import RentChartCities from "./RentChartCities.svelte";

    import { MediaQuery } from 'svelte/reactivity';

    let data = $state([
        { "name": "München", "rentSqm": 23.70 },
        { "name": "Berlin", "rentSqm": 19.11 },
        { "name": "Hamburg", "rentSqm": 17.16 },
        { "name": "Frankfurt", "rentSqm": 19.58 },
        { "name": "Köln", "rentSqm": 15.34 },
        { "name": "Stuttgart", "rentSqm": 19.96 },
        { "name": "Düsseldorf", "rentSqm": 15.17 },
        { "name": "Leipzig", "rentSqm": 10.71 },
        { "name": "Dresden", "rentSqm": 10.18 },
        { "name": "Nürnberg", "rentSqm": 13.76 },
        { "name": "Hannover", "rentSqm": 11.69 },
        { "name": "Bremen", "rentSqm": 11.80 },
        { "name": "Dortmund", "rentSqm": 9.94 },
        { "name": "Essen", "rentSqm": 9.68 }
    ]);

    let selectedIndex = $state();
    let animationKey = $state(0);
    let selectedButton = $state(false);
    const smallScreen = new MediaQuery('max-width: 1120px');


    const sortAlphabetically = (index) => {
        data = [...data].sort((a, b) => a.name.localeCompare(b.name, 'de'));
        selectedIndex = index;
    };

    const sortDescending = (index) => {
        data = [...data].sort((a, b) => b.rentSqm - a.rentSqm);
    };

    const sortAscending = (index) => {
        data = [...data].sort((a, b) => a.rentSqm - b.rentSqm);
    };

    const triggerAnimation = (sortFn, index) => {
        if (index !== selectedIndex) {
            sortFn();   
            selectedIndex = index;       
            animationKey += 1; 
        }
    }

    const buttons = [
        {text: "⬇", function: (i) => triggerAnimation(sortDescending, i)},
        {text: "⬆", function: (i) => triggerAnimation(sortAscending, i)},
        {text: "A-Z", function: (i) => triggerAnimation(sortAlphabetically, i)},
    ]
</script>

<section class="chart-container">
    <RentChartCities 
        {data} 
        {sortAlphabetically} 
        {sortDescending} 
        {sortAscending} 
        {triggerAnimation} 
        {buttons} 
        {selectedIndex}
        {smallScreen}
        {animationKey}/>
</section>

<style>
    .chart-container{
        padding: 5rem;
        background-color: var(--dark);
        color: var(--beige);
        margin: 0 auto;
    }

     @media screen and (max-width: 600px) {  

        .chart-container {
            padding: 4rem 0;
        }
    }
</style>

