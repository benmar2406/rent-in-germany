<script>
  import { onMount } from 'svelte';
  import typewriter from '../customTransitions/typewriterTransition.js';
  import { useVisibilityObserver } from '$lib/customHooks/useVisibilityObserver.svelte.js';

  let elementToObserve;
  let observer; 

  onMount(() => {
    observer = useVisibilityObserver(elementToObserve);
  });
</script>

<section class="conclusion">
  <div bind:this={elementToObserve} class="background-image-3"></div>
  {#if observer && observer.isVisible}
    <p transition:typewriter>
      Was braucht es, damit Wohnen wieder möglich wird – statt unerschwinglich?
    </p>
  {/if}
</section>


<style>
  .conclusion {
    position: relative;
    width: 100%;
    text-align: center;
    margin: 0 auto;

  }

  .conclusion p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Poppins";
    font-weight: 700;
    color: var(--bright);
  }

  .background-image-3 {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    /* background-image: url('/images/people.jpg'); */
    background-size: cover;
    background-position: center;
    background-color: rgb(0, 0, 0, 0.7);
    z-index: -1;
  }

  .background-image-3::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dark);
    z-index: 1;
  }
</style>
