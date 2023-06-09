<script>
import { store } from "../store.js";
import AppFlag from './AppFlag.vue';
import AppStars from './AppStars.vue';


export default {
    name: 'SingleElement',
    components: {
        AppFlag,
        AppStars
    },
    props: {
        details: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="card">
        <!-- Aggiunta foto con url e parth API -->
        <img class="card-img" :src="store.imgURL + details.poster_path" :alt="details.title">
        <!-- Card con info -->
        <div class="card-body">

            <!-- Titolo italiano movies -->
            <h5 v-if="details.title">{{ details.title }}</h5>

            <!-- Titolo italiano serie -->

            <h5 v-if="details.name">{{ details.name }}</h5>

            <!-- Titolo originale movies -->
            <h6 v-if="details.title && details.title !== details.original_title">{{ details.original_title }}</h6>

            <!-- Titolo originale serie -->
            <h6 v-if="details.name && details.name !== details.original_name">{{ details.original_name }}</h6>

            <!-- Componente per le bandiere -->
            <AppFlag :lang="details.original_language" />

            <!-- Componente per le stelle -->
            <AppStars :star="Math.round(details.vote_average / 2)" />

            <!-- Descrizione -->
            <p>{{ details.overview }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'styles/partials/cards' as *;
</style>