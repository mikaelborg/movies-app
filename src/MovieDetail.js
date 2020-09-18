import React from 'react';
import style from './movie-detail.module.scss';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

const MovieDetail = ({match}) => {
    const movies = useSelector(state => state.searchReducer.allMovies);
    const movie = movies.find(movie => movie.key === match.params.key);
    const history = useHistory();

    return (
        <div>
            <Button className={style.back} variant="dark" onClick={() => history.goBack()}>Back</Button>
            <div className={style.moviedetail}>
                <h1>{movie.name}</h1>
                <img className={style.img} src={require(`./images/${movie.img}`)} alt={movie.img}/>
                <p>{movie.description}</p>
                <div>
                {movie.genres.map(genre => 
                    <p className={style.box}>{genre}</p>
                )}</div>
                <div className={style.extra}>
                    <p><b>Rating:</b> {movie.rate}</p>
                    <p><b>Length:</b> {movie.length}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;