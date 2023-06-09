<script>
import { store } from "../store.js";
import SingleMovie from './SingleMovie.vue';
import SingleTv from './SingleTv.vue';


export default {
    name: 'AppListato',
    components: {
        SingleMovie,
        SingleTv
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <h4 v-if="!store.flagNoResult">Nessun risultato trovato</h4>
    <h3 v-if="store.movieArray.length !== 0">Movies</h3>
    <div class="cont">
        <div class="lista">
            <SingleMovie v-for="card in store.movieArray" :key="card.id" :details="card" />
        </div>
    </div>
    <h3 v-if="store.tvArray.length !== 0">TV Series</h3>
    <div class="cont">
        <div class="lista">
            <SingleTv v-for="card in store.tvArray" :key="card.id" :details="card" />
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

h3 {
    padding: 20px;
}
</style>