<script setup>
import { ref } from 'vue'

const nome = ref('')
const mensagem = ref('')
const enviado = ref(false)

function enviar() {
  enviado.value = true
}

function novaMensagem() {
  nome.value = ''
  mensagem.value = ''
  enviado.value = false
}
</script>

<template>
  <section class="pagina">
    <h1>Contato</h1>
    <p class="intro">Tem uma sugestão de filme ou encontrou algum problema? Fale com a gente.</p>

    <form v-if="!enviado" class="form" @submit.prevent="enviar">
      <label for="nome">Nome</label>
      <input id="nome" v-model="nome" type="text" placeholder="Seu nome" required />

      <label for="mensagem">Mensagem</label>
      <textarea
        id="mensagem"
        v-model="mensagem"
        rows="5"
        placeholder="Sua mensagem"
        required
      ></textarea>

      <button type="submit" class="enviar">Enviar</button>
    </form>

    <div v-else class="sucesso">
      <p>Obrigado, {{ nome }}! Recebemos sua mensagem.</p>
      <button class="enviar" @click="novaMensagem">Enviar outra mensagem</button>
    </div>
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
  margin: 0.5rem 0 1.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 500px;
}

label {
  font-weight: bold;
  margin-top: 0.5rem;
}

input,
textarea {
  background: var(--cor-superficie);
  color: var(--cor-texto);
  border: 1px solid var(--cor-texto-suave);
  border-radius: var(--raio);
  padding: 0.6rem 0.8rem;
  font: inherit;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--cor-destaque);
}

textarea {
  resize: vertical;
}

.enviar {
  align-self: flex-start;
  margin-top: 1rem;
  background: var(--cor-destaque);
  color: var(--cor-texto);
  border: none;
  border-radius: var(--raio);
  padding: 0.6rem 1.4rem;
  font: inherit;
  cursor: pointer;
}

.enviar:hover {
  opacity: 0.85;
}

.sucesso {
  max-width: 500px;
  background: var(--cor-superficie);
  border-radius: var(--raio);
  padding: 1.5rem;
}
</style>