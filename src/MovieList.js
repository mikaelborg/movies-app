import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import { useSelector, useDispatch } from 'react-redux';
import { search } from './actions';
import GenreFilter from './GenreFilter';

const MovieList = () => {
    const searchResult = useSelector(state => state.searchReducer.searchResult);
    const genreResult = useSelector(state => state.searchReducer.genreResult);
    //intersect both results - movie must match genre filter and search field
    const result = searchResult.filter(x => genreResult.includes(x));

    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        dispatch(search(searchValue));
    }, [searchValue]);

    const updateSearch = (e) => {
        setSearchValue(e.target.value);
    }
    
    return (
        <div>
            <div className="navbar">
                <h1 className="main-title">Movie List</h1>
                <input className="search-bar" type="text" placeholder="Search Movie" value={searchValue} onChange={updateSearch} />
                <div className="genre-select">
                <GenreFilter />
                </div>
            </div>
            <div className="movies">
                {result.map(movie => (
                    <Movie key={movie.id} path={movie.key} name={movie.name} img={movie.img} />
                ))}
            </div>
        </div>
    );
}

export default MovieList;