import React, { useState, useEffect } from 'react';
import './Hero.css';
import axios from '../axios';
import requests from '../requests';


function Hero() {
    const [movie, setMovie] = useState([])

    useEffect(()=> {
        async function fetchData() {
const request = await axios.get(requests.trending)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ])
            return request;
        }
       fetchData();
    }, []);
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "...": str;
}  
return (
    <header className='hero' style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
    }}>
    <div className='hero__contents'>
        <h1 className='hero__title'>
            {movie?.title || movie?.name || movie.original_name}
        </h1>
        <h1 className='hero__description'>{truncate(movie?.overview, 150)}</h1>
    <div className='hero__buttons'>
        <button className='play__button'>Play</button>
        <button className='info__button'>More Info</button>
    </div>
    </div>
</header>
)
}

export default Hero
