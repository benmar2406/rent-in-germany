<script>
    import SocialHousingChart from "./SocialHousingChart.svelte";
    import PopulationChart from "./PopulationChart.svelte";
    import SocialHousingArticle from "./SocialHousingArticle.svelte";

    let socialHouses = $state(2500000);
    let homelessPeople = $state( 330000);
    let selectedIndex = $state(0);
	let factorHouses = $state(10000);
    let factorHomeless = $state(10000);
    let displayHouse = true;
    

    let totalIcons = $derived(socialHouses / factorHouses) 
    let houseIcons = $derived(Array.from({ length: totalIcons }, (_, index) => ({
        index
    })));

    let totalIconsPeople = $derived(homelessPeople / factorHomeless) 
    let peopleIconsArray = $derived(Array.from({ length: totalIconsPeople }, (_, index) => ({
        index
    })));


    let buttons = [
        { year: 2002, numberSocialAppartments: 2500000, homelessPopulation: 330000 },
        { year: 2023, numberSocialAppartments: 1100000, homelessPopulation: 531600 },
    ]

    const handleButtonClick = (index) => {
        selectedIndex = index;
        socialHouses = buttons[index].numberSocialAppartments;
        homelessPeople = buttons[index].homelessPopulation;
    }

</script>


<section class="social-housing-section">
    <h2>Sozialer Wohnungsbau im Rückgang</h2>
    <div class="button-container">
        {#each buttons as button, index}
            <button 
                onclick={() => handleButtonClick(index)}
                class:selected={index === selectedIndex}
                >
                {button.year}
            </button>
        {/each}
    </div>
    <div class="grid-layout">
        <SocialHousingChart 
            {houseIcons} 
            {socialHouses}
            {factorHouses}
        />
        <PopulationChart 
            {homelessPeople} 
            {peopleIconsArray} 
            {factorHomeless}
        />
    </div>
    <SocialHousingArticle />
</section>

<style>

    .social-housing-section {
        background-color: var(--dark);
        margin:  auto;
        padding-top: 2rem;
        padding-bottom: 4rem;
        color: var(--bright);
    }

    .social-housing-section h2 {
        width: 90%;
        margin: auto;
    }

    .grid-layout {
        display: grid;
        grid-template-columns: 1fr 1fr; 
        width: 85%;
        margin: auto;
        gap: 0.8rem;
        max-width: 1200px;
    }

    .button-container {
        margin: 2rem auto;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
  }

  .button-container button {
    font-weight: 600;
}


 @media screen and (max-width: 760px) {
    .grid-layout {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        width: 100%;
    }
  }

  @media screen and (max-width: 1150px) {
    .grid-layout {
        width: 95%;
    }
  }
</style>
