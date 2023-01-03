import './css/App.css';
import Homepage from './containers/homepage'
import Login from './containers/login';
import Signup from './containers/signup';
import Collections from './containers/collections';
import Artworks from './containers/artworks';
import Artists from './containers/artists';
import { React, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SuccessSignUp from './containers/successSignUp';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/artworks" element={<Artworks />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/success" element={<SuccessSignUp/>} />
            </Routes>

        </Router>
    );
}

export default App;