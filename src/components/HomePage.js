import React from 'react';
import SearchBox from './SearchBox';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
const HomePage=()=>(
    <div className="homepage">
        <NavBar/>
        <div className="search-button">
        <img className="logoimage" src="https://i.ibb.co/S6qY37h/bmovies-copy.png"></img>
          <SearchBox/>
          <div class="container">
          

           <Link to="/movies"  class="button type1">
            Use the old Movies site? Click Here
            </Link>
          </div>
        </div>

    </div>
);
export default HomePage;