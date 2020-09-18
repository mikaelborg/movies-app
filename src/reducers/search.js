import importedMovies from '../movie.mock-data.json';
const searchReducer = (state = {allMovies: importedMovies, searchResult: importedMovies, genreResult: importedMovies}, action) => {
    switch (action.type) {
        case 'SEARCH':
            //only select movies that match the search filter typed by the user
            const searchResult = state.allMovies.filter(movie => movie.name.toLowerCase().includes(action.value.toLowerCase()));
            return {...state, searchResult};
        case 'FILTER':
            //only select movies that match all the user selected genres
            const genreResult = state.allMovies.filter(movie => action.filter.every(genre => movie.genres.includes(genre)));
            return {...state, genreResult};
        default:
            return state
    }
}

export default searchReducer;