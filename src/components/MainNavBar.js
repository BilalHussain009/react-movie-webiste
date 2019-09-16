import React from 'react';
import $ from 'jquery';
import { Helmet } from "react-helmet";
window.$ = $;
const MainNavBar=()=>(
  <div id="header">
    <Helmet>
      <script>
        {`	$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
	
	$("#menu-icon").on("click", function(){
    $("nav").slideToggle();
    $(this).toggleClass("active");
});

`}
      </script>
    </Helmet>
  <div className="logo">
  <img className="mainlogoimage" src="https://i.ibb.co/S6qY37h/bmovies-copy.png"></img>

  </div>  
  <nav>
    <form className="search" action="search.php"> 
      <input name="q" placeholder="Search..." type="search"></input>
    </form>
    <ul>
      <li>
        
        <a href="">
          
          Home
        
        </a>
      </li>
      <li>
        <a href="">About</a>
        <ul className="mega-dropdown">
          <li className="row">
            <ul className="mega-col">
              <li><a href="#">About</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul className="mega-col">
              <li><a href="#">Help</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Services</a></li>
            </ul>
            <ul className="mega-col">
              <li><a href="#">Coming Soon</a></li>
              <li><a href="#">404 Error</a></li>
              <li><a href="#">Search</a></li>
              <li><a href="#">Author Page</a></li>
            </ul>
            <ul className="mega-col">
              <li><a href="#">Full Width</a></li>
              <li><a href="#">Right Column</a></li>
              <li><a href="#">Left Column</a></li>
              <li><a href="#">Maintenance</a></li>
            </ul>
          </li>
        </ul>        
      </li>
      <li className="dropdown">
        <a href="">Contact</a>
          <ul>
            <li><a href="#">About Version</a></li>
            <li><a href="#">About Version</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>        
      </li>
      <li>
        <a href="">Portfolio</a>
      </li>
      <li>
        <a href="">Team</a>
      </li>
    </ul>
  </nav>
</div>
);
export default MainNavBar;