import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Rows from './components/Rows';
import requests from './requests';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Rows title= "NETFLIX ORIGINALS" 
      fetchUrl={requests.netflixOriginals}/>
      <Rows title= "Trending Now" 
      fetchUrl={requests.trending}/>
      <Rows title= "Top Rated" 
      fetchUrl={requests.topRatedMovies}/>
      <Rows title= "Now Playing" 
      fetchUrl={requests.nowPlaying}/>
      <Rows title= "Action" 
      fetchUrl={requests.fetchAction}/>
      <Rows title= "Comedy" 
      fetchUrl={requests.fetchComedy}/>
      <Rows title= "Horor" 
      fetchUrl={requests.fetchHoror}/>
      <Rows title= "Romance" 
      fetchUrl={requests.fetchRomance}/>
      <Rows title= "Documentaries" 
      fetchUrl={requests.fetchDocumentaries}/>
      <Footer />
    </div>
  );
}

export default App;
