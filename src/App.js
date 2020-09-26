import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import requsets from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requsets.fetchTreanding} />
      <Row title="Top Rated" fetchUrl={requsets.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requsets.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requsets.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requsets.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requsets.fetchRomanceMovies} />
      <Row title="Documentry Movies" fetchUrl={requsets.fetchDocumentaries} />
    </div>
  );
}

export default App;
