import React, {useState, useEffect } from 'react'

import './App.css';
import Cart from './Components/Cart/Cart';
import Country from './Components/Country/Country';

function App() {
  const[countries, setCountries]=useState([])
  const[cart, setCart]=useState([])
  
  //fetch data from api
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
    
  })

  //Add country to cart
  const handleAddCountry = (country)=> {
    const newCart = [...cart, country];
    setCart(newCart);
  }

  return (
    <div className="App">

      <h1>CountryLoaded: {countries.length}</h1>
      <p><small>Country Added:{cart.length} </small></p>
      <Cart cart={cart}></Cart>
      
        {
          countries.map(country=><Country country={country} handleAddCountry={handleAddCountry}></Country>)
        }
      
      
    
      
      

     
    </div>
  );
}

export default App;
