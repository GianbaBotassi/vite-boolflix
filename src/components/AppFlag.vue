
<script>
import { store } from "../store.js";

export default {
    name: "AppFlag",
    props: {
        lang: String
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- Messe bandiere ottenendo dinamicamente (ex en or it) e inserendolo all'interno url immagine -->
    <div class="language">
        <img :src="'../../flags/' + lang + '.svg'" alt="No flag" onerror="src='../../flags/wg.svg'">
    </div>
</template>

<style lang="scss" scoped>
@use 'styles/partials/cards' as *;
</style>