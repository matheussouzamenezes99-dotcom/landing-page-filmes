<template>
  <header class="header">
    <h1>🎬 CineVue</h1>
    <p class="subtitulo">Seu catálogo de filmes em uma única página</p>

    <nav class="menu">
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/sobre">Sobre</RouterLink>
      <RouterLink to="/contato">Contato</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  max-width: 1100px;
  margin: 0 auto 2rem;
  padding: 2rem 1rem 1.5rem;
  border-bottom: 2px solid var(--cor-destaque);
}

.subtitulo {
  color: var(--cor-texto-suave);
}

.menu {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.menu a {
  color: var(--cor-texto);
  text-decoration: none;
}

.menu a:hover {
  color: var(--cor-destaque);
}

.menu a.router-link-exact-active {
  color: var(--cor-destaque);
  font-weight: bold;
  border-bottom: 2px solid var(--cor-destaque);
}
</style>