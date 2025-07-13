<script>
import HouseIcon from "./HouseIcon.svelte";
import Figcaption from "./Figcaption.svelte";
import { fade } from 'svelte/transition';

let {
    houseIcons,
    socialHouses,
    factorHouses
} = $props();

const legendText = "Sozialwohnungen";

</script>

<figure class="social-housing-container">
    <h3 class="number-social-housing">Anzahl Sozialwohnungen:<br>{socialHouses.toLocaleString('de-DE')}</h3>
    <div class="house-icon-grid" role="group" aria-label="Chart, dass die Menge an Sozialwohnungen für die betreffende Stadt und das ausgewählte Jahr anzeigt.">
        {#each houseIcons as house}
        <div
            aria-hidden="true"
            class="icon-wrapper"
            transition:fade={{ duration: 1000 }}>
            <HouseIcon />
        </div>
        {/each}
    </div>
    <Figcaption 
        factor={factorHouses} 
        text={legendText} 
        IconComponent={HouseIcon}
    />
</figure>

<style>
   .social-housing-container {
       margin: 0.2rem auto;
   }

   .number-social-housing {
       text-align: center;
       margin: auto;
       margin: 1.2rem auto;
   }

   .house-icon-grid {
       margin: auto;
       display: grid;
       grid-template-columns: repeat(15, 1fr);
       gap: 0.2rem;
       align-content: flex-start;
       width: fit-content;
       padding: 0.8rem;
       border: 1px solid var(--main);
       min-height: 570px;
       margin: 0.2rem auto;
   }

   .icon-wrapper {
       width: 1.8rem;
       height: 1.8rem;
   }

   @media screen and (max-width: 1150px) {
       .house-icon-grid {
           grid-template-columns: repeat(10, 1fr);
       }
   }

   @media screen and (max-width: 760px) {
       .number-social-housing {
           margin-top: 2rem;
       }

       .house-icon-grid {
           grid-template-columns: repeat(10, 1fr);
       }
   }
</style>
