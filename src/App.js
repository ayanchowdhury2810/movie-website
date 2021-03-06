import React from 'react'
import './App.css'
import Row from './Components/Row';
import requests from './requests';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';

function App() {

  return (
    <div className='App'>
    <Navbar/>
    <Banner/>
      <Row title='Watch Now' fetchUrl={requests.fetchWatchNow} isLargeRow/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romantic Movies' fetchUrl={requests.fetchRomanticMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )

}

export default App
