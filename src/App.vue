<script setup>
import { ref } from 'vue'
import MovieCard from './components/MovieCard.vue'

const filmes = ref([
  { id: 1, titulo: 'Interestelar', ano: 2014, genero: 'Ficção Científica', nota: 8.7, poster: '' },
  { id: 2, titulo: 'Cidade de Deus', ano: 2002, genero: 'Drama', nota: 8.6, poster: '' },
  { id: 3, titulo: 'O Auto da Compadecida', ano: 2000, genero: 'Comédia', nota: 8.5, poster: '' },
  { id: 4, titulo: 'Parasita', ano: 2019, genero: 'Suspense', nota: 8.5, poster: '' },
  { id: 5, titulo: 'Homem-Aranha no Aranhaverso', ano: 2018, genero: 'Animação', nota: 8.4, poster: '' }
])
</script>

<template>
  <main>
    <h1>CineLista</h1>

    <section class="lista">
      <MovieCard
        v-for="filme in filmes"
        :key="filme.id"
        :titulo="filme.titulo"
        :ano="filme.ano"
        :genero="filme.genero"
        :nota="filme.nota"
        :poster="filme.poster"
      />
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

h1 {
  margin-bottom: 1.5rem;
}

.lista {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}
</style>