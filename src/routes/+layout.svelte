<script>
  
</script>

<header>
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
    font-weight: bold;
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
    font-weight: bold;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  nav a::after {
    content: ''; 
    position: absolute;
    bottom: -5px; 
    left: 0%; 
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
  }

  footer {
    background-color: #5da8c5;
    color: white;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
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