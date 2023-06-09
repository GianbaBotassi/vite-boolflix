import { reactive } from "vue";

export const store = reactive({
    apiURL: "https://api.themoviedb.org/3/search/",
    apiKey: 'api_key=796456c2386e4e1185a2a39dc2e6ebb1',
    language: 'language=it-IT',
    typology: ['movie', 'tv'],
    movieArray: [],
    tvArray: [],
    flagNoResult: true,
    searchWord: "",
    imgURL: 'https://image.tmdb.org/t/p/w300',
    apiGenresURL: 'https://api.themoviedb.org/3/genre/',
    genresMovieArray: [],
    genresTvArray: []
})
