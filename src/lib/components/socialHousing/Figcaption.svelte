<script>
    import HumanIcon from './HumanIcon.svelte';
    import HouseIcon from './HouseIcon.svelte';

    let { 
        factor, 
        displayHuman, 
        text,
        IconComponent
    } 
    = $props();

    //const IconComponent = displayHuman ? HumanIcon : HouseIcon;
</script>

<figcaption>
    <div class="icon-wrapper">
        <IconComponent />
    </div>
    <span>
        = {factor.toLocaleString("de-DE")} {text}
    </span>
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
