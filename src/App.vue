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
          if (store.movieArray.length === 0) {
            store.movieArray = res.data.results
          }
          store.tvArray = res.data.results
        }).catch((err) => {
          console.log(err.message)
        })
      });

    }
  },
  created() {
    this.getSearchWord()
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

header {
  background-color: black;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h2 {
    color: red;
  }
}

main {
  padding-top: 100px;
  background-color: grey;
  height: 100vh;
}
</style>
