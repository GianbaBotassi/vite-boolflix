
<script>
import { store } from "../store.js";

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- Input di ricerca, salva dati al click e invia emit ad AppVue -->
    <input type="text" v-model.trim="store.searchWord" @keyup.enter="$emit('sendSearchWord')"
        placeholder="Film, Serie tv.. ">
</template>

<style lang="scss" scoped>
input {
    width: 200px;
}
</style>