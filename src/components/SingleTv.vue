<script>
import { store } from "../store.js";

export default {
    name: 'SingleMovie',
    props: {
        details: Object
    },
    data() {
        return {
            store
        }
    },
    computed: {

        // Computed properties con parametro per mettere stelline piene e vuote
        generateStarRating() {
            return (rating) => {
                const fullStars = Math.floor(rating);
                const emptyStars = 5 - fullStars;

                let stars = '';

                for (let i = 0; i < fullStars; i++) {
                    stars += '<img class="ciao" src="../../stars/star-solid.png" alt="Star solid width="20" height="20"">';
                }

                for (let i = 0; i < emptyStars; i++) {
                    stars += '<img class="ciao" src="../../stars/star-empty.png" alt="Star solid width="20" height="20"">';
                }

                // Ritorna una stringa con tutte le immagini
                return stars;
            };
        },
    },

}
</script>

<template>
    <div class="card">
        <!-- Aggiunta foto con url e parth API -->
        <img class="card-img" :src="store.imgURL + details.poster_path" :alt="details.name">
        <!-- Card con info -->
        <div class="card-body">
            <!-- Titolo italiano -->
            <h5>{{ details.name }}</h5>
            <!-- Titolo originale -->
            <h6 v-if="details.original_name !== details.original_name">{{ details.original_name }}</h6>
            <!-- Messe bandiere ottenendo dinamicamente (ex en or it) e inserendolo all'interno url immagine -->
            <div class="lang">
                <img :src="'../../flags/' + details.original_language + '.svg'" alt="No flag"
                    onerror="src='../../flags/wg.svg'">
            </div>
            <!-- Generate stelle piene e vuote con computed -->
            <span class="stars" v-html="generateStarRating(details.vote_average / 2)"></span>
            <!-- Descrizione -->
            <p>{{ details.overview }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'styles/partials/cards' as *;
</style>