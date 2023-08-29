<script>
import { store } from "../store.js";
import SingleElement from "./SingleElement.vue";

export default {
  name: "AppListato",
  components: {
    SingleElement,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- Sezione Movies -->
  <div id="movies">
    <h3>Movies</h3>
    <div class="text-center">
      <h4 v-if="!store.elementArray[0].length">Nessun risultato trovato</h4>
    </div>
    <div class="cont">
      <div class="lista">
        <SingleElement
          v-for="card in store.elementArray[0]"
          :key="card.id"
          :details="card"
        />
      </div>
    </div>
  </div>

  <div id="bord" v-if="store.stateFirstSearch"></div>

  <!-- Sezione tv -->
  <div id="Tv">
    <h3>TV Series</h3>
    <div class="text-center">
      <h4 v-if="!store.elementArray[1].length">Nessun risultato trovato</h4>
    </div>
    <div class="cont">
      <div class="lista">
        <SingleElement
          v-for="card in store.elementArray[1]"
          :key="card.id"
          :details="card"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "styles/general" as *;

#bord {
  width: 50%;
  border-bottom: dotted 5px black;
  margin: 30px auto 20px;
}

h3 {
  padding-left: 20px;
}

.lista {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>