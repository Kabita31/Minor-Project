import React,{useEffect, useState} from 'react'
import Mycard from '../cards/Mycard.js'
import books from '../components/books.png'
import plustwo from '../components/+2.jpg'
import entrance from '../components/Entrance.jpg'
import school from '../components/School.jpg'
import './Imagecarousel.css'
import book1 from '../components/book1.jpg';
import book2 from '../components/book2.jpg';
import book3 from '../components/book3.jpg';
import book4 from '../components/book4.jpg';
import book5 from '../components/book5.jpg';

import './Imagecarousel.css'
const Imagecarousel = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    useEffect(()=>
    {
      getData();
    },[]);
    const [error, setError] = useState(null);
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    }
  
    const getData = (event) => {
      event.preventDefault();
      setError(null);
      fetch(`https://63d10005d5f0fa7fbdc1ab47.mockapi.io/qwerty`) // change the endpoint to fetch the books data
        .then(response => {
  
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then(data => {
          let filteredResults = data.filter(book => 
              book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              book.author.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (!filteredResults.length) {
            throw new Error("Not Found!");
          }
          setResults(filteredResults);
        })
        .catch(error => {
          setError(error.message);
          setResults([]);
        });
    }

    return (
        

        
            <div className="product-container">
           <div>
        {results.length ? (
          results.map((result, index) => (

            <Mycard  name={result.name} /*img={}*/  seller={result.author} price="Rs. 550"   s="Uploaded By : Koshish Shrestha"/>
          ))
        ) : (
          <div className="no-results">No results found</div>
        )}
      </div>
            
            

      
    
        
        </div>
    )
}

export default Imagecarousel