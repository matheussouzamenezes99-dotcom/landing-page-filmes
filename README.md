# CineVue 🎬

Aplicação One Page em Vue.js para explorar e organizar um catálogo de filmes.
Projeto desenvolvido para a disciplina de [NOME DA DISCIPLINA].

## Equipe

- [Nome 1]
- [Nome 2]
- [Nome 3]

## Sobre o projeto

O CineVue reúne filmes em uma única página. Cada filme aparece em um card com
título, ano, gênero e nota, e é possível:

- filtrar os filmes por gênero;
- favoritar um filme;
- abrir e fechar a sinopse de cada filme;
- cadastrar novos filmes por um formulário;
- acompanhar o total de filmes no catálogo, que atualiza sozinho.

Os dados ficam em uma lista local no `App.vue`, sem API externa e sem
bibliotecas de terceiros.

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
- CSS puro (sem frameworks de CSS, bibliotecas de componentes ou Vue Router)

## Estrutura do projeto

```
src/
├── assets/
│   └── main.css          # variáveis CSS e estilos globais
├── components/
│   ├── AppHeader.vue     # cabeçalho com nome, subtítulo e total de filmes
│   ├── AppFooter.vue     # rodapé com os integrantes da equipe
│   ├── GenreFilter.vue   # botões de filtro por gênero
│   ├── MovieCard.vue     # card de filme (favoritar e sinopse)
│   └── MovieForm.vue     # formulário de cadastro de filme
├── App.vue               # monta a página e guarda o estado principal
└── main.js
```

## Componentes

| Componente | Função |
|---|---|
| `AppHeader.vue` | Exibe o nome do projeto, o subtítulo e o total de filmes |
| `AppFooter.vue` | Lista os integrantes da equipe |
| `GenreFilter.vue` | Mostra os gêneros e avisa o `App.vue` qual foi escolhido |
| `MovieCard.vue` | Exibe um filme, com botões de favoritar e de ver a sinopse |
| `MovieForm.vue` | Formulário que envia um novo filme para o `App.vue` |

## Conceitos de Vue utilizados

- **Props:** `MovieCard` recebe `titulo`, `ano`, `genero`, `nota`, `poster` e `sinopse`;
  `AppHeader` recebe `titulo`, `subtitulo` e `total`; `AppFooter` recebe `equipe`;
  `GenreFilter` recebe `generos` e `ativo`; `MovieForm` recebe `generos`.
- **Reúso de componente:** o mesmo `MovieCard` é renderizado uma vez para cada filme,
  cada um com seus próprios dados e seu próprio estado de favorito e sinopse.
- **Reatividade (`ref`):** a lista de filmes, o gênero ativo e a abertura do formulário
  ficam em `ref` no `App.vue`; o card guarda `favorito` e `mostrarSinopse`; o formulário
  guarda um `ref` para cada campo.
- **Diretivas:**
  - `v-for`: lista de filmes, botões de gênero, opções do select e integrantes da equipe;
  - `v-if` / `v-else`: pôster ou inicial do título, formulário aberto ou fechado e
    mensagem "Nenhum filme encontrado";
  - `v-show`: abrir e fechar a sinopse;
  - `v-model`: campos do formulário de cadastro.
- **Eventos:** `@click` (favoritar, sinopse, filtro, abrir formulário) e
  `@submit.prevent` (cadastro de filme).
- **Comunicação entre componentes:** props descem do `App.vue` para os filhos e
  eventos (`emit`) sobem dos filhos para o `App.vue`.
- **CSS:** variáveis globais em `main.css` (cores, raio das bordas) e estilos
  `scoped` em cada componente.

## Uso de Inteligência Artificial

A inteligência artificial foi utilizada como ferramenta de apoio durante o
desenvolvimento do projeto, sempre com atenção total da equipe: todo o código
gerado foi revisado, testado e compreendido pelos integrantes.

## Possíveis melhorias

- Adicionar pôsteres reais aos filmes.
- Permitir remover filmes da lista.
- Exibir uma seção só com os favoritos.