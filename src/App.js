import React, { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';


function App() {
  const [countries, setCountries] = useState([]);
  // const [addCountry, setAddCountry] = useState([]); 
  // alternative
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .then(error => console.log(error))
  }, [])
  const handleAddCountry = (country) => {
    // const newAddCountry = [...addCountry, country]
    // setAddCountry(newAddCountry)
    const newCart = [...cart, country]
    setCart(newCart)
  }
  return (
   <div>
    <h1>Country Loaded: {countries.length}</h1>
    <h4>Country Added: {cart.length}</h4>
    <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country country= {country} handleAddCountry={handleAddCountry} key= {country.alpha3Code}></Country>)
      }
      
   </div>
  );
}

export default App;
