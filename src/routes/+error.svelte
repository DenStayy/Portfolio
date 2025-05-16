<script>
  export let error;
  export let status;
</script>

<main class="error-container">
  <h1>{status}</h1>
  <h2>Oups, une erreur est survenue !</h2>
  <p>{error?.message ?? "Une erreur inconnue s'est produite."}</p>
  <a href="/" class="home-link">Retour à l'accueil</a>
</main>

<style>
  .error-container {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #333;
    background: #f4f4f9;
  }

  h1 {
    font-size: 6rem;
    color: #5da8c5;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #666;
  }

  .home-link {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #5da8c5;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.2s;
  }

  .home-link:hover {
    background: #4a90a4;
  }
</style>