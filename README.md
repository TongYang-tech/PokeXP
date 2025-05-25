<a id="readme-top"></a>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<!-- <br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    &middot;
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div> -->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
# About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

## Project Summary

This project is a fullstack web application that helps users explore and analyze data from the Pokémon universe using both the [Pokémon API](https://pokeapi.co/) and the [Pokémon TCG API](https://pokemontcg.io/). The frontend allows users to search for Pokémon, view their stats, and browse trading card information. The backend serves as a proxy and data aggregator, securely handling API keys and combining data from both APIs to provide a seamless experience. This app is ideal for Pokémon fans and trading card collectors who want to discover, compare, and analyze Pokémon and their cards in one place.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][React.js]][React-url]
[![Chakra-UI][Chakra]][Chakra-url]
[![Express][Express.js]][Express-url]
[![Node][Node.js]][Node-url]
[![Vite][Vite]][Vite-url]
[![Eslint][Eslint]][Eslint-url]
[![Vitest][Vitest]][Vitest-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
# Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [Pokemon TCG](https://pokemontcg.io/)
2. Clone the repo
   ```sh
   git clone https://github.com/TongYang-tech/my-tcg-pokex.git
   ```
3. Install NPM packages
   ```sh
   npm run setup
   ```
4. Enter your API in `.env`
   ```sh
   export BASE_PATH=/myLoLytics
   export POKEMON_TCG_API_KEY=
   ```
5. Dev
   ```sh
   npm run dev
   ```
6. Build
   ```sh
   npm run build
   ```
7. Preview
   ```sh
   npm run preview
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/TongYang-tech/my-tcg-pokex?style=for-the-badge
[contributors-url]: https://github.com/TongYang-tech/my-tcg-pokex/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TongYang-tech/my-tcg-pokex?style=for-the-badge
[forks-url]: https://github.com/TongYang-tech/my-tcg-pokex/forks
[stars-shield]: https://img.shields.io/github/stars/TongYang-tech/my-tcg-pokex?style=for-the-badge
[stars-url]: https://github.com/TongYang-tech/my-tcg-pokex/stargazers
[issues-shield]: https://img.shields.io/github/issues/TongYang-tech/my-tcg-pokex?style=for-the-badge
[issues-url]: https://github.com/TongYang-tech/my-tcg-pokex/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/tongyang20
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Node.js]: http://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white
[Vite-url]: https://vite.dev/
[Vitest]: https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white
[Vitest-url]: https://vitest.dev/
[Chakra]: https://shields.io/badge/chakra--ui-black?logo=chakraui&style=for-the-badge
[Chakra-url]: https://chakra-ui.com/
[Eslint]: https://img.shields.io/badge/ESLint-3A33D1?logo=eslint
[Eslint-url]: https://eslint.org/