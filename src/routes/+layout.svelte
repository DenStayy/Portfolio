<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import { slide } from 'svelte/transition';
  
  let isMenuOpen = false;
  let shrink = false;

  function onScroll() {
    if (browser) {
      shrink = window.scrollY > 0;
    }
  }

  onMount(() => {
    if (!browser) return;
    onScroll();  
    window.addEventListener('scroll', onScroll);
  });

  onDestroy(() => {
    if (!browser) return;
    window.removeEventListener('scroll', onScroll);
  });

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function navigate(path) {
    if (browser) {
      window.location.href = path;
    }
  }
</script>

<header class:shrink={shrink}>
  <nav>
    <a href="/" class="logo">Denis Popov</a>
    <div class="desktop-nav">
      <a href="/">Accueil</a>
      <a href="/about">À propos</a>
      <a href="/projects">Projets</a>
    </div>
    <label class="burger {isMenuOpen ? 'open' : ''}" for="burger">
      <input type="checkbox" id="burger" on:click={toggleMenu} />
      <span></span><span></span><span></span>
    </label>
  </nav>

  {#if isMenuOpen}
    <div class="mobile-menu" transition:slide={{ duration: 300 }}>
      <a href="/" on:click|preventDefault={() => navigate('/')}>Accueil</a>
      <a href="/about" on:click|preventDefault={() => navigate('/about')}>À propos</a>
      <a href="/projects" on:click|preventDefault={() => navigate('/projects')}>Projets</a>
    </div>
  {/if}
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
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    background-color: #5da8c5;
    padding: 1.5rem 2rem;
    transition: padding 0.45s ease-in-out, font-size 0.45s ease-in-out;
  }

  
  header.shrink {
    padding: 0.75rem 1rem;
  }


  .logo {
    color: white;
    text-decoration: none;
    font-size: 2.25rem;
    font-weight: 700;
    transition: font-size 0.5s ease-in-out;
  }


  header.shrink .logo {
    font-size: 1.75rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  .desktop-nav {
    display: flex;
    gap: 2rem;
  }
  .desktop-nav a {
    position: relative;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  .desktop-nav a::after {
    content: '';
    position: absolute;
    bottom: -5px; left: 0;
    width: 0; height: 2px;
    background: white;
    transition: width 0.3s ease;
  }
  .desktop-nav a:hover::after {
    width: 75%;
  }

  
  .burger {
    display: none;
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
  }
  .burger input {
    display: none;
  }
  .burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #fff5f5;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }
  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }
  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }
  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }
  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }
  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }
  .burger.open span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 50%;
  }
  .burger.open span:nth-of-type(2) {
    opacity: 0;
  }
  .burger.open span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 50%;
  }

  .mobile-menu {
    top: 100%; 
    left: 0;
    right: 0;
    position: absolute;
    z-index: 9999;
    display: none;  
    flex-direction: column;
    background-color: #5da8c5;
    border-top: 1px solid #ccc;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .mobile-menu a {
    color: white;
    text-decoration: none;
    font-size: 1.25rem;
    padding: 0.75rem 1.5rem;
    display: block;
    transition: background 0.3s ease; 
  }
  .mobile-menu a:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  main {
    padding-top: 0;
    background: #f6f6f6;
  }

  footer {
    background-color: #5da8c5;
    color: white;
    padding: 1.5rem 0;
    text-align: center;
    position: fixed;
    bottom: 0; left: 0; width: 100%;
    box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
  }
  footer p { 
    margin: 0; 
    font-size: 1.25rem; 
  }

  @media (max-width: 768px) {
    .desktop-nav { display: none; }

    .burger {
      display: block;
      margin-right: 3.5rem; 
    }

    .mobile-menu { display: flex; }

    footer p {
      font-size: 1rem;
    }
  }

  @media (min-width: 769px) {
    .mobile-menu { display: none; }
  }
</style>