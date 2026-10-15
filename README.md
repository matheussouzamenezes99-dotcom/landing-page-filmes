# CineVue 🎬

Aplicação One Page em Vue.js para explorar um catálogo de filmes.
Projeto desenvolvido para a disciplina de [NOME DA DISCIPLINA].

## Equipe

- [Nome 1]
- [Nome 2]
- [Nome 3]

## Sobre o projeto

O CineVue reúne filmes em uma única página, exibindo cada um em um card com
título, ano, gênero e nota. [Complementar conforme novas funcionalidades forem
adicionadas: filtro por gênero, favoritar, cadastro de filmes...]

## Como executar

```bash
git clone [LINK DO REPOSITÓRIO]
cd cine-vue
npm install
npm run dev
```

Depois, abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
```

## Tecnologias

- Vue 3 com `<script setup>`
- Vite
- CSS puro (sem frameworks ou bibliotecas externas)

## Estrutura do projeto

```
src/
├── assets/
│   └── main.css          # variáveis CSS e estilos globais
├── components/
│   └── MovieCard.vue     # card de filme (recebe dados via props)
├── App.vue               # monta a página e guarda a lista de filmes
└── main.js
```

## Componentes

| Componente | Função |
|---|---|
| `MovieCard.vue` | Exibe um filme (título, ano, gênero, nota e pôster) |

## Conceitos de Vue utilizados

- **Props:** `MovieCard` recebe `titulo`, `ano`, `genero`, `nota` e `poster`.
- **Reúso de componente:** o mesmo `MovieCard` é renderizado uma vez para cada filme.
- **Diretivas:** `v-for` (lista de filmes) e `v-if`/`v-else` (pôster ou inicial do título).
- **Reatividade:** `ref()` guarda a lista de filmes no `App.vue`.

## Uso de Inteligência Artificial

A IA foi usada como ferramenta de apoio. Todo o código foi revisado, testado
e compreendido pela equipe.

| Etapa | Prompt utilizado | Como foi usado |
|---|---|---|
| Planejamento | "[prompt exato]" | Definir a divisão em componentes |
| Base do projeto | "[prompt exato]" | Limpar o projeto e criar estilos globais |
| MovieCard | "[prompt exato]" | Criar o componente com props e a lista com `v-for` |