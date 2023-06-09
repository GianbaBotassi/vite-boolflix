<script>
import { store } from "../store.js";

export default {
    name: "AppStars",
    props: {
        star: Number
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="stars">
        <img v-for="item in (star)" src="../../stars/star-solid.png" alt="Stella piena">
        <img v-for="item in (5 - star)" src="../../stars/star-empty.png" alt="Stella vuota">
    </div>
</template>

<style lang="scss" scoped>
@use 'styles/partials/cards' as *;
</style>