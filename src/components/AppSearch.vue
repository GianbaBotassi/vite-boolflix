
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
    <input type="text" v-model="store.searchWord" @keyup.enter="$emit('sendSearchWord')">
    <button @click="$emit('sendSearchWord')">Clicca</button>
</template>

<style lang="">
    
</style>