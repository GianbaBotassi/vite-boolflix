import { reactive } from "vue";

export const store = reactive({
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=796456c2386e4e1185a2a39dc2e6ebb1&language=it-IT",
    movieArray: [],
    searchWord: ""

})