// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSongs } from "./components/api";
import Header from "./components/Header";
import Footer from './components/Footer';
// import Search from './components/SearchBar';
// import Player from './components/Player';
// import Chart from './components/Aside';
import LandingPage from './pages/LandingPage';
import CardsPage from './pages/CardsPage';
import DetailPage from './pages/DetailPage';



function App() {

  const dispatch = useDispatch();

  const [hits, setHits] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const getPlaylist = async () => {
      const songsFetched = await fetchSongs();
      setHits(songsFetched);
      setPlaylist(songsFetched);
    };

    getPlaylist();
  }, []);


  return (
    <Router>
    <div>
      <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/results/*" element={<CardsPage hits={hits} />} />
          <Route path="/musicplayer" element={<DetailPage playlist={playlist} />} />
        </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;

