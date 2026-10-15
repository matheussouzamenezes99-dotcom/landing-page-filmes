<script setup>
defineProps({
  generos: Array,
  ativo: String
})

const emit = defineEmits(['selecionar'])
</script>

<template>
  <nav class="filtro">
    <button
      v-for="genero in generos"
      :key="genero"
      class="btn"
      :class="{ ativo: genero === ativo }"
      @click="emit('selecionar', genero)"
    >
      {{ genero }}
    </button>
  </nav>
</template>

<style scoped>
.filtro {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.btn {
  background: transparent;
  color: var(--cor-texto);
  border: 1px solid var(--cor-texto-suave);
  border-radius: 999px;
  padding: 0.4rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
}

.btn:hover {
  border-color: var(--cor-destaque);
}

.btn.ativo {
  background: var(--cor-destaque);
  border-color: var(--cor-destaque);
}
</style>