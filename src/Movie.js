import React from 'react';
import style from './movie.module.scss';
import { Link } from 'react-router-dom';

const Movie = ({path, name, img}) => {
    return (
        <Link className={style.movie} to={`/movies-app/${path}`}>
            <h1 className={style.title}>{name}</h1>
            <img className={style.img} src={require(`./images/${img}`)} alt={img}/>
        </Link>
    );
}

export default Movie;