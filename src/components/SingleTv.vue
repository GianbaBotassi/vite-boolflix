<script>
import { store } from "../store.js";

export default {
    name: 'SingleTv',
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
        <img class="card-img" :src="store.imgURL + details.poster_path" :alt="details.name">
        <div class="card-body">
            <h4>{{ details.name }}</h4>
            <h4>{{ details.original_name }}</h4>
            <div class="lang">
                <img :src="'../../flags/' + details.original_language + '.svg'" alt="No flag"
                    onerror="src='../../flags/wg.svg'">
            </div>
            <div>{{ details.vote_average }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'styles/partials/cards' as *;
</style>