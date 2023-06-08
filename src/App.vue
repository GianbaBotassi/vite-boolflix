<script>
import { store } from "./store.js";
import axios from 'axios'   //npm install axios


import AppSearch from './components/AppSearch.vue';
import AppListato from './components/AppListato.vue';

export default {
  components: {
    AppSearch,
    AppListato
  },
  data() {
    return {
      store
    }
  },
  methods: {

    getSearchWord() {
      store.typology.forEach(element => {
        let newAPI = `${store.apiURL}${element}?${store.apiKey}&${store.language}&query=${store.searchWord}`;
        axios.get(newAPI).then((res) => {
          if (element === 'movie') {
            store.movieArray = res.data.results
          }
          store.tvArray = res.data.results
        }).catch((err) => {
          console.log(err.message)
        })
      });

    }
  }
}
</script>

<template>
  <header>
    <h2 id="logo">
      BOOLFIX
    </h2>
    <div>
      <AppSearch @sendSearchWord="getSearchWord" />
    </div>
  </header>
  <main>
    <AppListato />
  </main>
</template>

<style scoped lang="scss">
@use 'styles/general' as *;
@use 'styles/partials/variables' as *;
</style>
