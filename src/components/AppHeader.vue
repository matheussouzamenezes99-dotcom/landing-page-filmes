<script setup>
defineProps({
  titulo: String,
  subtitulo: String,
  total: Number
})
</script>

<template>
  <header class="header">
    <h1>🎬 {{ titulo }}</h1>
    <p class="subtitulo">{{ subtitulo }}</p>
    <p class="total">{{ total }} filmes no catálogo</p>
  </header>
</template>

<style scoped>
.header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--cor-destaque);
}

.subtitulo {
  color: var(--cor-texto-suave);
}

.total {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--cor-destaque);
  font-weight: bold;
}
</style>