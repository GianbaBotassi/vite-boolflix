<script>
import { store } from "./store.js";
import axios from 'axios'   //npm install axios


import AppSearch from './components/AppSearch.vue';
import AppListato from './components/AppListato.vue';
// import AppGenres from './components/AppGenres.vue';

export default {
  components: {
    AppSearch,
    AppListato,
    // AppGenres
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

      // if (!store.movieArray.length && !store.tvArray.length) {
      //   store.flagNoResult = false
      // }

      console.log(store.flagNoResult);
      console.log(store.movieArray.length);
      console.log(store.tvArray.length);
    },
    // genresCall() {
    //   store.typology.forEach(element => {
    //     let newGenresAPI = `${store.apiGenresURL}${element}/list?${store.apiKey}`;
    //     axios.get(newGenresAPI).then((res) => {
    //       if (element === 'movie') {
    //         store.genresMovieArray = res.data
    //       }
    //       store.genresTvArray = res.data
    //     }).catch((err) => {
    //       console.log(err.message)
    //     })

    //   });
    // }
  }
}
</script>

<template>
  <header>
    <div>
      <img src="../logo.png" alt="">
    </div>
    <!-- <div>
          <AppGenres @changeOption="genresCall" />
        </div> -->
    <div>
      <AppSearch @sendSearchWord="getSearchWord" />
    </div>
  </header>
  <main>
    <AppListato />
  </main>
</template>

<style lang="scss">
@use 'styles/general' as *;
@use 'styles/partials/variables' as *;
</style>
