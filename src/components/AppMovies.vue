<script>
import { store } from "../store.js";
import SingleMovie from './SingleMovie.vue';


export default {
    name: 'AppMovies',
    components: {
        SingleMovie
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <h4>Movies</h4>
    <div class="cont">
        <div class="lista">
            <SingleMovie v-for="card in store.movieArray" :key="card.id" :details="card" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'styles/general' as *;


.lista {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

}
</style>