import React, { useState } from 'react'
import "./Home.css";
import banner from './components/banner.png';
// import Imagecarousel from './Imagecarousel';
import books from './components/books.png';
import {Link} from "react-router-dom";
import clipart2 from "./components/clipart2.jpg"
import BuyingPage from './cards/PlusTwo';
import axios from 'axios';

import { useRef } from 'react';
import './fullscreensearch.css';


function Home() {

  const [searchvalue,setSearchValue]=useState("");




  
    // This ref will be connected to the overlay div
    const overlayRef = useRef();
  
    // This function is called when the "Start Searching" button gets clicked
    const openSearch = () => {
      overlayRef.current.style.width = '100%';
    };
  
    // This function is called when the "Close" button is clicked
    const closeSearch = () => {
      overlayRef.current.style.width = '0%';
    };

    const handleClick=(e)=>
    {

      console.log(searchvalue);
    };

      const handleChange=(e)=>
      {   setSearchValue(e.target.value);
         axios
        .post("https://63d10005d5f0fa7fbdc1ab47.mockapi.io/qwerty", searchvalue)
        .then((res) => {
          console.log(res);
        })
  
        .catch((error) => {
          console.log(error);
        });
    };
        
      











    return (
    <>
    <div className="home">
    
    <div className="top_banner">
    <h1 className="top_header_main">
    <h1 className='top_header'>Online books</h1><p className="top_header_two">
     made easier</p></h1>
      <img className="home_image" src={clipart2}/>
      </div>
    <div className="banner">
    <div className="banner_one">
    
    <h1 className='cat_name'>Buy old books</h1>
    <button onClick={openSearch} className="button_buy">Start</button>
    </div>

    
    
    
    
    {/* The search overlay */}
    <div ref={overlayRef} className='fullscreen_overlay'>
          <button className='fullscreen_close-button' onClick={closeSearch}>
            &times;
          </button>
          <div className='fullscreen_overlay-content'>
            <form>
              <input id="search"
                type='text'
                name='searchvalue'
                
                
                placeholder='What are you looking for...?'
                className='fullscreen_search-input'
                onChange={handleChange}
             ></input>
              <Link to ="/search"><button
                className='fullscreen_search-button'
                onClick={handleClick}
                
                  /* Your search logic here */
                 
              >
                Search
              </button> </Link>
              <p className='fullscreen_search-text'>
                Enter your keyword into the search box
              </p>
            </form>
          </div>
        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <div className="banner_two">
    
    <h1 className='cat_name'>Sell old books</h1>
    <Link to="/addbook"><button className="button_sell">Start</button> </Link>
    </div>
    </div>



    </div>
    
 </> )
};

export default Home