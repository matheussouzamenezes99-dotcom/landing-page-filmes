<script setup>
defineProps({
  titulo: String,
  ano: Number,
  genero: String,
  nota: Number,
  poster: String
})
</script>

<template>
  <article class="card">
    <img v-if="poster" :src="poster" :alt="`Pôster de ${titulo}`" class="poster" />
    <div v-else class="poster poster-vazio">{{ titulo[0] }}</div>

    <div class="info">
      <h2>{{ titulo }}</h2>
      <p class="detalhes">{{ ano }} · {{ genero }}</p>
      <p class="nota">★ {{ nota }}</p>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: var(--cor-superficie);
  border-radius: var(--raio);
  overflow: hidden;
}

.poster {
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  display: block;
}

.poster-vazio {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background: var(--cor-destaque);
}

.info {
  padding: 1rem;
}

.detalhes {
  color: var(--cor-texto-suave);
  font-size: 0.9rem;
}

.nota {
  margin-top: 0.5rem;
  font-weight: bold;
}
</style>