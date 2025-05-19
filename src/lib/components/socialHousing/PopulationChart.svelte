<script>
    import HumanIcon from './HumanIcon.svelte';
    import { fade } from 'svelte/transition';

    let { homelessPeople, peopleIconsArray } = $props();

</script>

<figure class="social-housing-container">
    <h3 class="number-social-housing">Obdachlosigkeit:<br>{homelessPeople.toLocaleString('de-DE')} Menschen betroffen</h3>
    <div class="human-icon-grid" role="group" aria-label="Chart, dass die Menge an Obdachlosen für die betreffende Stadt und das ausgewählte Jahr anzeigt.">
        {#each peopleIconsArray as person}
            <div 
                class="icon-wrapper" 
                transition:fade={{ duration: 1000 }}
                aria-hidden="true"
            >  
                <HumanIcon />
            </div>
        {/each}
    </div>
</figure>


<style>   
    .social-housing-container {
        margin: 0.2rem auto;  
    }

    .number-social-housing {
        text-align: center;
        margin: 1.2rem auto;
    }

    .human-icon-grid {
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        gap: 0.2rem;
        row-gap: 0.5rem;
        align-content:flex-start;
        width: fit-content;
        padding: 0.8rem;
        border: 1px solid #ca3f2d;
        min-height: 170px;
        margin: 0.2rem auto;

    }

    .icon-wrapper {
        width: 1.8rem;
        height: 1.8rem;
    }

    @media screen and (max-width: 1150px) {
        .human-icon-grid {
            grid-template-columns: repeat(10, 1fr);
        }

        .number-social-housing {
            margin-top: 2rem;
        }
    }

    @media screen and (max-width: 750px) {
        .number-social-housing {
            margin-top: 2rem;
        }

        .human-icon-grid {
            grid-template-columns: repeat(5, 1fr);
        }
    }
</style>