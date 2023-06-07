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
      console.log(store.searchWord);

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
  <AppSearch @sendSearchWord="getSearchWord" />
  <AppMovies />
</template>

<style scoped lang="scss">
@use 'styles/general' as *;
@use 'styles/partials/variables' as *;
</style>
