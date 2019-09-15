import React from 'react';
import SearchBox from './SearchBox';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
const HomePage=()=>(
    <div className="homepage">
        <NavBar/>
        <div className="search-button">
        <img className="logoimage" src="https://bmovies.co/wp-content/themes/gomovies/images/bmovies%20copy.png"></img>
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