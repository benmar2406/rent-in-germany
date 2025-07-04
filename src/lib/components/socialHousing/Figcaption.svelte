    <script>
        import HumanIcon from './HumanIcon.svelte';
        import HouseIcon from './HouseIcon.svelte';

        let factor = $state("");
        let legendText = $state("")

        let { displayHuman, factorHomeless, factorHouses } = $props();
        
    </script>
    
    <figcaption>
        <div class="icon-wrapper">  
            {#if displayHuman}
            <HumanIcon />
            {:else}
            <HouseIcon />
            {/if}
        </div>
        <span>= 
            {#if displayHuman}
                <span>{factorHomeless.toLocaleString("de-DE")} Obdachlose Menschen</span>
            {:else}
                <span>{factorHouses.toLocaleString("de-DE")} Sozialwohnungen</span>
            {/if}
    </figcaption>

<style>
    .icon-wrapper {
        width: 1.8rem;
        height: 1.8rem;
    }

    figcaption {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
</style>