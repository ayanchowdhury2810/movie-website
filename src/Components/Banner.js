import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../axios';
import requests from '../requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ])
        }
        fetchData();
    }, [])
    
    console.log('Movie: ',movie);

    const truncate = (str, n) =>{
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }
   

    return (
        <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url( "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}" )`,
            backgroundPosition: "center center"
        }}
        >
            <div className='banner_content'>
                <h1 className='banner_title'> {movie?.title || movie?.name || movie?.original_name || movie?.original_title} </h1>   

                <div className='banner_buttons'>
                    <button className='banner_button'>Watch Now</button>
                    <button className='banner_button'>My Watchlist</button>
                </div>

                <h1 className='banner_overview'>{truncate(movie?.overview, 150)}</h1>
            </div>
            
            <div className='banner_fade'/>
        </header>
    )
}

export default Banner;
