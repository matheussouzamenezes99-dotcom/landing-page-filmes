<template>
  <section class="pagina">
    <h1>Sobre o CineVue</h1>
    <p class="intro">
      Catálogo de filmes feito em Vue 3 como atividade da disciplina de Front-End Frameworks,
      agora evoluído para uma SPA com Vue Router.
    </p>

    <h2>Funcionalidades</h2>
    <ul class="lista">
      <li>Catálogo de filmes com cards reutilizáveis</li>
      <li>Filtro por gênero</li>
      <li>Formulário para adicionar novos filmes</li>
      <li>Navegação entre páginas sem recarregar</li>
    </ul>

    <h2>Tecnologias</h2>
    <ul class="lista">
      <li>Vue 3 com <code>&lt;script setup&gt;</code></li>
      <li>Vue Router</li>
      <li>Vite</li>
    </ul>
  </section>
</template>

<style scoped>
.pagina {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.intro {
  color: var(--cor-texto-suave);
  margin: 0.75rem 0 1.5rem;
}

h2 {
  margin: 1.5rem 0 0.5rem;
  font-size: 1.2rem;
  color: var(--cor-destaque);
}

.lista {
  padding-left: 1.2rem;
  color: var(--cor-texto-suave);
}

.lista li {
  margin-bottom: 0.3rem;
}
</style>