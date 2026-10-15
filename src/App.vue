<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import MovieCard from './components/MovieCard.vue'
import GenreFilter from './components/GenreFilter.vue'
import MovieForm from './components/MovieForm.vue'

const filmes = ref([
  {
    id: 1,
    titulo: 'Interestelar',
    ano: 2014,
    genero: 'Ficção Científica',
    nota: 8.7,
    poster: '',
    sinopse: 'Astronautas atravessam um buraco de minhoca em busca de um novo lar para a humanidade.'
  },
  {
    id: 2,
    titulo: 'Cidade de Deus',
    ano: 2002,
    genero: 'Drama',
    nota: 8.6,
    poster: '',
    sinopse: 'A vida de jovens numa comunidade do Rio de Janeiro, entre o crime e a busca por outro destino.'
  },
  {
    id: 3,
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    genero: 'Comédia',
    nota: 8.5,
    poster: '',
    sinopse: 'Dois amigos espertos do sertão nordestino se metem em confusões e tentam escapar com muita lábia.'
  },
  {
    id: 4,
    titulo: 'Parasita',
    ano: 2019,
    genero: 'Suspense',
    nota: 8.5,
    poster: '',
    sinopse: 'Uma família pobre se infiltra aos poucos na casa de uma família rica, com consequências inesperadas.'
  },
  {
    id: 5,
    titulo: 'Homem-Aranha no Aranhaverso',
    ano: 2018,
    genero: 'Animação',
    nota: 8.4,
    poster: '',
    sinopse: 'Miles Morales vira o Homem-Aranha e conhece versões do herói vindas de outros universos.'
  }
])

const generosFilme = ref([
  'Ficção Científica',
  'Drama',
  'Comédia',
  'Suspense',
  'Animação',
  'Ação',
  'Terror'
])
const generos = ref(['Todos', ...generosFilme.value])
const generoAtivo = ref('Todos')
const mostrarForm = ref(false)

const equipe = ref(['Nome 1', 'Nome 2', 'Nome 3'])

function selecionarGenero(genero) {
  generoAtivo.value = genero
}

function adicionarFilme(novoFilme) {
  filmes.value.push({ id: Date.now(), ...novoFilme })
  mostrarForm.value = false
}

function filmesFiltrados() {
  if (generoAtivo.value === 'Todos') {
    return filmes.value
  }
  return filmes.value.filter((filme) => filme.genero === generoAtivo.value)
}
</script>

<template>
  <main>
    <AppHeader
      titulo="CineVue"
      subtitulo="Seu catálogo de filmes em uma única página"
      :total="filmes.length"
    />

    <button class="abrir" @click="mostrarForm = !mostrarForm">
      {{ mostrarForm ? 'Fechar formulário' : '+ Novo filme' }}
    </button>

    <MovieForm
      v-if="mostrarForm"
      :generos="generosFilme"
      @adicionar="adicionarFilme"
    />

    <GenreFilter
      :generos="generos"
      :ativo="generoAtivo"
      @selecionar="selecionarGenero"
    />

    <p v-if="filmesFiltrados().length === 0" class="vazio">
      Nenhum filme encontrado.
    </p>

    <section class="lista">
      <MovieCard
        v-for="filme in filmesFiltrados()"
        :key="filme.id"
        :titulo="filme.titulo"
        :ano="filme.ano"
        :genero="filme.genero"
        :nota="filme.nota"
        :poster="filme.poster"
        :sinopse="filme.sinopse"
      />
    </section>

    <AppFooter :equipe="equipe" />
  </main>
</template>

<style scoped>
main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.abrir {
  background: transparent;
  color: var(--cor-texto);
  border: 1px solid var(--cor-destaque);
  border-radius: var(--raio);
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

.abrir:hover {
  background: var(--cor-destaque);
}

.vazio {
  color: var(--cor-texto-suave);
  margin-bottom: 1rem;
}

.lista {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}
</style>