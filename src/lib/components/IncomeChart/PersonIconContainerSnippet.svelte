<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';


    let { handleIconClick, selectedIndex, householdSizes, iconsArray } = $props();
    
</script>

{#snippet personsIcon(icon, index, selectedIndex, handleIconClick)}
<div class="icon-container-wrapper">
    <button 
        class="icon-container" 
        class:selected={index === selectedIndex}
        onclick={() => handleIconClick(index)}
        onkeydown={(e) => e.key === 'Enter' && handleIconClick(index)}
    >
        <img src={icon[0]} alt="Person Icon" />
    </button>
    <p class="household-size-text">{icon[1]}</p>
</div>
{/snippet}

<div class="household-container">
    <p class="sub-titles class" id="haushaltsgroesse-title">Wähle die Haushaltsgröße aus:</p>
    <div class="person-icons-grid">
        {#each iconsArray as icon, index}
            {@render personsIcon(icon, index, selectedIndex, handleIconClick)}
        {/each}
    </div>
</div>

<style>
    .household-container {
        padding: 0.1rem;
        margin: 0.1rem;
        margin-bottom: 2rem;
        height: fit-content;
        width: 100%;
    }
    
    .person-icons-grid {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: start;
        gap: 1rem;
        width: 100%;
        height: fit-content;
        margin-top: 1rem auto;
        margin: auto;
    }

    .person-icons-grid > div {
        flex-basis: 44%;
        padding: 0.1rem;
    }

    .icon-container {
        width: 3.5rem;
        height: 3.5rem;
        border: 3px solid #000;
        background-color: transparent;
        border-radius: 50%;
        padding: 0.5rem;
        margin: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 0.3s ease;
    }

    .icon-container:hover, .icon-container.selected {
        border-color: #ca3f2d;
        cursor: pointer;
    }

    .icon-container img {
        padding: 0.2rem;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }  

    .household-size-text {
        text-align: center;
        margin-top: 0.1rem;
        font-family: 'Poppins', sans-serif;
        font-size: 0.7rem;
        font-weight: 700;
        line-height: 0.8rem;
    }

    .icon-container-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    

    @media screen and (max-width: 1200px) {
        .person-icons-grid {
            align-items: start;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 360px;
        }
    }

</style>