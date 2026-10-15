<script setup>
import { ref } from 'vue'

defineProps({
  generos: Array
})

const emit = defineEmits(['adicionar'])

const titulo = ref('')
const ano = ref(null)
const genero = ref('')
const nota = ref(null)
const sinopse = ref('')

function enviar() {
  emit('adicionar', {
    titulo: titulo.value,
    ano: ano.value,
    genero: genero.value,
    nota: nota.value,
    poster: '',
    sinopse: sinopse.value || 'Sem sinopse cadastrada.'
  })

  titulo.value = ''
  ano.value = null
  genero.value = ''
  nota.value = null
  sinopse.value = ''
}
</script>

<template>
  <form class="form" @submit.prevent="enviar">
    <h2>Novo filme</h2>

    <label>
      Título
      <input v-model="titulo" type="text" required />
    </label>

    <label>
      Ano
      <input v-model.number="ano" type="number" min="1888" max="2100" required />
    </label>

    <label>
      Gênero
      <select v-model="genero" required>
        <option value="" disabled>Selecione</option>
        <option v-for="g in generos" :key="g" :value="g">{{ g }}</option>
      </select>
    </label>

    <label>
      Nota (0 a 10)
      <input v-model.number="nota" type="number" min="0" max="10" step="0.1" required />
    </label>

    <label>
      Sinopse
      <textarea v-model="sinopse" rows="3"></textarea>
    </label>

    <button type="submit" class="enviar">Adicionar filme</button>
  </form>
</template>

<style scoped>
.form {
  display: grid;
  gap: 1rem;
  background: var(--cor-superficie);
  border-radius: var(--raio);
  padding: 1.5rem;
  margin-bottom: 2rem;
  max-width: 500px;
}

label {
  display: grid;
  gap: 0.3rem;
  font-size: 0.9rem;
  color: var(--cor-texto-suave);
}

input,
select,
textarea {
  background: var(--cor-fundo);
  color: var(--cor-texto);
  border: 1px solid var(--cor-texto-suave);
  border-radius: var(--raio);
  padding: 0.5rem 0.75rem;
  font: inherit;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--cor-destaque);
}

.enviar {
  background: var(--cor-destaque);
  color: var(--cor-texto);
  border: none;
  border-radius: var(--raio);
  padding: 0.7rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>