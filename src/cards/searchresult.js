import React from 'react';
import ImageSearch from './ImageSearch';
import "./plustwo.css";

const searchResult = () => {
  return (
    <div>
   
    <div className='cat_main_title'>
    <h1 className='cat_title'>Search Results for: </h1>
    </div>
    <div className="cat_main">
    <div className="cat">
        
    <p className="para">Categories</p>
    <hr/>
    <ul>
    <li><a href="/plustwoo">+2</a></li>
    <li><a href="/bachelors">Bachelors</a></li>
    <li><a href="/entrance">Entrance</a></li>
    <li><a href="/school">School Books</a></li>
    
    </ul>
    </div> 
    <div className="booklist_wrapper">
    
    <ImageSearch/>
    
    
    </div>
    <div className="cat_o">
        

    <p className="para_o">Filters</p>
    <hr/>
    </div> 
   </div>

    </div>
  )
}

export default searchResult
