<script>
import { store } from "./store.js";
import axios from "axios"; //npm install axios

import AppSearch from "./components/AppSearch.vue";
import AppListato from "./components/AppListato.vue";
// import AppGenres from './components/AppGenres.vue';

export default {
  components: {
    AppSearch,
    AppListato,
    // AppGenres
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getSearchWord() {
      store.elementArray = [];

      store.typology.forEach((element) => {
        let newAPI = `${store.apiURL}${element}?${store.apiKey}&${store.language}&query=${store.searchWord}`;
        axios
          .get(newAPI)
          .then((res) => {
            store.elementArray.push(res.data.results);

            store.stateFirstSearch = true;
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  },
};
</script>

<template>
  <header>
    <div>
      <img src="../logo.png" alt="" />
    </div>
    <div>
      <AppSearch @sendSearchWord="getSearchWord" />
    </div>
  </header>
  <main>
    <AppListato v-if="store.stateFirstSearch" />
    <div id="empty-page" v-else>
      <h2>
        Scrivi nella barra di ricerca in alto a sinistra per trovare i tuoi
        film/serie tv preferiti
      </h2>
    </div>
  </main>
</template>

<style lang="scss">
@use "styles/general" as *;
@use "styles/partials/variables" as *;
</style>
