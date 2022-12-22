import React, {useState, useEffect} from 'react';
import './Rows.css';
import axios from '../axios';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
// https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg

const base_url = "https://image.tmdb.org/t/p/original/"
function Rows({title, fetchUrl}) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(()=> {
        async function fetchData() {
        const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        return request
        }
        fetchData()
    }, [fetchUrl])

const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.original_name || movie?.title || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row__posters'>
        {movies?.map((movie)=>
        <img key={movie.id} onClick={() => handleClick(movie)} className='row__poster' src={`${base_url}${movie.poster_path}`} alt={movie.name} />
        )}
    </div>

      <div className="row__youtube">
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>

    </div>
  )
}

export default Rows
