import React from 'react';
import Slider from './Slider';
import NavBar from './NavBar';
import MainNavBar from './MainNavBar';
const MoviePage=()=>(
    <div>
        <MainNavBar/>
        <Slider/>
        <div className="infobar">
            <div className="infobar-heading">Like and Share our Website to support Us.</div>
        </div>
       
    </div>
);
export default MoviePage;