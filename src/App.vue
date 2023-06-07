<script>
import { store } from "./store.js";

import AppSearch from './components/AppSearch.vue';

export default {
  components: {
    AppSearch
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <AppSearch />
</template>

<style scoped lang="scss">
@use 'styles/general' as *;
@use 'styles/partials/variables' as *;
</style>
