import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_image_url = 'https://image.tmdb.org/t/p/w500'

function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            // console.log(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])

    // console.log(movies)

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay:1,
        }
    }

    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title ||"")
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch((error)=> console.log(error));
        }
    }

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters' >
            {movies.map(movie => (
                <img key={movie.id} onClick={()=>handleClick(movie)} className={`poster ${isLargeRow && 'poster_large'}`} src={`${base_image_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
