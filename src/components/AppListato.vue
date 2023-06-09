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
    <!-- Sezione Movies -->
    <div id="movies">
        <h3 v-if="store.stateFirstSearch">Movies</h3>
        <div class="text-center">
            <h4 v-if="!store.movieArray.length && store.stateFirstSearch">Nessun risultato trovato</h4>
        </div>
        <div class="cont">
            <div class="lista">
                <SingleMovie v-for="card in store.movieArray" :key="card.id" :details="card" />
            </div>
        </div>
    </div>

    <div id="bord" v-if="store.stateFirstSearch"></div>

    <!-- Sezione tv -->
    <div id="Tv">
        <h3 v-if="store.stateFirstSearch">TV Series</h3>
        <div class="text-center">
            <h4 v-if="!store.tvArray.length && store.stateFirstSearch">Nessun risultato trovato</h4>
        </div>
        <div class="cont">
            <div class="lista">
                <SingleTv v-for="card in store.tvArray" :key="card.id" :details="card" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'styles/general' as *;

#bord {
    width: 50%;
    border-bottom: dotted 5px black;
    margin: 30px auto 20px;
}

h3 {
    padding-left: 20px;
}

.lista {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
</style>