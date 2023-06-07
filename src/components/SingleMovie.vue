<script>

export default {
    name: 'SingleMovie',
    props: {
        details: Object
    }

}
</script>

<template>
    <div class="movie">
        <h4>{{ details.title }}</h4>
        <h4>{{ details.original_title }}</h4>
        <div class="lang">
            <img :src="'../../flags/' + details.original_language + '.svg'" alt="Non esiste"
                onerror="src='../../flags/wg.svg'">
        </div>
        <div>{{ details.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables' as *;

.movie {
    width: 150px;
    background-color: $primary-bg;
    border: solid 1px blue;
    text-align: center;

    .lang {
        margin-bottom: 5px;
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: center;
    }

}
</style>