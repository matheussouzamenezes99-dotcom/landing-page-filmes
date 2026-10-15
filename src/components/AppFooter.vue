<script setup>
defineProps({
  equipe: Array
})
</script>

<template>
  <footer class="footer">
    <p>Projeto desenvolvido por:</p>
    <ul>
      <li v-for="nome in equipe" :key="nome">{{ nome }}</li>
    </ul>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--cor-superficie);
  text-align: center;
  color: var(--cor-texto-suave);
  font-size: 0.9rem;
}

ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1.5rem;
  margin-top: 0.5rem;
}
</style>