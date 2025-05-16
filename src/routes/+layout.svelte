<script>
  import { onMount, onDestroy } from 'svelte';

  let shrink = false;
  let handleScroll;

  onMount(() => {
    if (typeof window !== 'undefined') {
      handleScroll = () => {
        shrink = window.scrollY > 50;
      };
      window.addEventListener('scroll', handleScroll);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined' && handleScroll) {
      window.removeEventListener('scroll', handleScroll);
    }
  });
</script>

<header class:shrink={shrink}>
  <nav>
    <p>Denis Popov</p>
    <div>
      <a href="/">Accueil</a>
      <a href="/about">À propos</a>
      <a href="/projects">Projets</a>
    </div>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <p>© DenisPopov.me, ALL RIGHTS RESERVED 2025.</p>
</footer>

<style>
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');

  :global(body) {
    margin: 0;
    font-family: "League Spartan", sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }

  header {
    background-color: #5da8c5;
    color: white;
    padding: 1.5rem 3rem;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    transition: padding 0.3s ease, background-color 0.3s ease;
    z-index: 1000;
  }


  header.shrink {
    padding: 0.75rem 3rem;
    background-color: #5da8c5;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
  }

  nav p {
    margin: 0;
    padding-left: 1rem;
    font-size: 2rem;
    font-weight: 700;
  }

  nav div {
    display: flex;
    gap: 2rem;
  }

  nav a {
    position: relative;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  nav a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }

  nav a:hover::after {
    width: 75%;
  }

  main {
    background: #f6f6f6;
    padding-top: 120px;
  }

  footer {
    background-color: #5da8c5;
    color: white;
    padding: 1.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  }

  footer p {
    margin: 0;
    font-size: 1.25rem;
  }
</style>