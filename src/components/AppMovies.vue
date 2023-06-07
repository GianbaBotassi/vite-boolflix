<script>
import { store } from "../store.js";

export default {
    name: 'AppMovies',
    data() {
        return {
            store
        }
    }
}
</script>

<template lang="">
    <div class="card" v-for="card in store.movieArray" :key="card.id">
        <div>{{card.title}}</div>
        <div>{{card.original_title}}</div>
        <div>{{card.original_language}}</div>
        <div>{{card.vote_average}}</div>
    </div>
</template>

<style lang="">
    
</style>