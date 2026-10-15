<script setup>
import { ref } from 'vue'

defineProps({
  titulo: String,
  ano: Number,
  genero: String,
  nota: Number,
  poster: String,
  sinopse: String
})

const favorito = ref(false)
const mostrarSinopse = ref(false)
</script>

<template>
  <article class="card">
    <img v-if="poster" :src="poster" :alt="`Pôster de ${titulo}`" class="poster" />
    <div v-else class="poster poster-vazio">{{ titulo[0] }}</div>

    <div class="info">
      <h2>{{ titulo }}</h2>
      <p class="detalhes">{{ ano }} · {{ genero }}</p>
      <p class="nota">★ {{ nota }}</p>

      <div class="acoes">
        <button
          class="btn"
          :class="{ ativo: favorito }"
          @click="favorito = !favorito"
        >
          {{ favorito ? '❤ Favoritado' : '♡ Favoritar' }}
        </button>

        <button class="btn" @click="mostrarSinopse = !mostrarSinopse">
          {{ mostrarSinopse ? 'Ocultar sinopse' : 'Ver sinopse' }}
        </button>
      </div>

      <p v-show="mostrarSinopse" class="sinopse">{{ sinopse }}</p>
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

.acoes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.btn {
  background: transparent;
  color: var(--cor-texto);
  border: 1px solid var(--cor-texto-suave);
  border-radius: var(--raio);
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  cursor: pointer;
}

.btn:hover {
  border-color: var(--cor-destaque);
}

.btn.ativo {
  background: var(--cor-destaque);
  border-color: var(--cor-destaque);
}

.sinopse {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--cor-texto-suave);
}
</style>