<h1 align="center">
    <img width=400 alt="netflix" src="https://res.cloudinary.com/drsxhihfr/image/upload/v1604360287/images/netflix_vv5ibp.png" />
    <br>
    Filmes, séries e muito mais.
</h1>




<p align="center">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/andersonsilva019/Netflix-clone-study"/>



  <img alt="Repository size" src="https://img.shields.io/github/repo-size/andersonsilva019/Netflix-clone-study">

  <a href="https://github.com/andersonsilva019/Netflix-clone-study/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/andersonsilva019/Netflix-clone-study">
  </a>

  <a href="https://github.com/andersonsilva019/Netflix-clone-study/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/andersonsilva019/Netflix-clone-study">
  </a>

  <a href="https://github.com/andersonsilva019/Netflix-clone-study/pulls">
    <img alt="GitHub closed pull requests" src="https://img.shields.io/github/issues-pr-closed/andersonsilva019/Netflix-clone-study">
  </a>

</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>
</p>

<img src="https://res.cloudinary.com/drsxhihfr/image/upload/v1604360197/images/Google_Chrome_-_Dark_bplogb.svg">

## :computer: Clone-Netflix

Esse projeto tem por finalidade utilizar [Nextjs]('https://nextjs.org/') consumindo a API [TMDB]('https://www.themoviedb.org/?language=pt-BR')

## :rocket: Tecnologias
- [Nextjs](https://nextjs.org/)
- [typescript]('https://www.typescriptlang.org/')
- [styled-components]('https://styled-components.com/')
- [Redux-toolkit]('https://redux-toolkit.js.org/')
- [React-redux](https://react-redux.js.org/)

## :wrench: Melhorando a performance da aplicação

### [ x ] Evitando novas requisições ao servidor para buscar os filmes

O Redux toolkit possui um middleware que permite que o estado seja atualizado de forma assíncrona. Além disso, tem uma feature que permite cachear os dados do servidor que se chama RTK Query. Na própria documentação existe uma seção que compara com outras ferramenta de cache em requisições para o servidor.

### [ x ] Evitando renderizações desnecessárias

Toda vez que o background do header alterava de cor, todas as listas da página inicial eram renderizadas novamente.

Antes de utilizar o `React.memo` o tempo de renderização da página home foi de **61.6ms**. Podemos obervar na imagem abaixo.

<img alt="Before react.memo" src="https://res.cloudinary.com/drsxhihfr/image/upload/v1632577457/images/before-memo_azp0fw.png"/>

Depois de utilizar o `React.memo` o tempo de renderização da página home foi de **5.1ms**. Podemos obervar na imagem abaixo.

<img alt="Before react.memo" src="https://res.cloudinary.com/drsxhihfr/image/upload/v1632577457/images/after-memo_vdbnwi.png"/>
