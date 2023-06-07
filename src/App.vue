<script>
import { store } from "./store.js";
import axios from 'axios'   //npm install axios

import AppSearch from './components/AppSearch.vue';
import AppMovies from './components/AppMovies.vue';

export default {
  components: {
    AppSearch,
    AppMovies
  },
  data() {
    return {
      store
    }
  },
  methods: {

    getSearchWord() {

      let newAPI = store.apiURL + `&query=${store.searchWord}`
      axios.get(newAPI).then((res) => {
        store.movieArray = res.data.results

      })
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
    <AppMovies />

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
  padding-top: 70px;
  background-color: grey;
  height: 100vh;
}
</style>
