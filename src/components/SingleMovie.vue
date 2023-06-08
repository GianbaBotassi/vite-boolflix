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
        generateStarRating() {
            return (rating) => {
                const fullStars = Math.floor(rating);
                const emptyStars = 5 - fullStars;

                let stars = '';

                for (let i = 0; i < fullStars; i++) {
                    stars += '<img class="ciao" src="../../public/stars/star-solid.png" alt="Star solid width="20" height="20"">';
                }

                for (let i = 0; i < emptyStars; i++) {
                    stars += '<img class="ciao" src="../../public/stars/star-empty.png" alt="Star solid width="20" height="20"">';
                }

                return stars;
            };
        },
    },

}
</script>

<template>
    <div class="card">
        <img class="card-img" :src="store.imgURL + details.poster_path" :alt="details.title">
        <div class="card-body">
            <h3>{{ details.title }}</h3>
            <h5 v-if="details.title !== details.original_title">{{ details.original_title }}</h5>
            <div class="lang">
                <img :src="'../../flags/' + details.original_language + '.svg'" alt="No flag"
                    onerror="src='../../flags/wg.svg'">
            </div>
            <div class="stars" v-html="generateStarRating(details.vote_average / 2)"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'styles/partials/cards' as *;
</style>