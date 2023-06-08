
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
    <input type="text" v-model.trim="store.searchWord" @keyup.enter="$emit('sendSearchWord')"
        placeholder="Film, Serie tv.. ">
</template>

<style lang="">
    
</style>