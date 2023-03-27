import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    //By for loop, we can get the total population of each item in the cart
    //let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation =totalPopulation + country.population;
        
    // }

    //By Reduce, we can get the total population of each item in the cart
    const totalPopulation = cart.reduce((total, country) => {
    return total + country.population;
     }, 0);
    return (
        <div>
            <h4>This is Cart : {cart.length}</h4>
            <h5>Total Population: {totalPopulation}</h5>
        </div>
    );
};

export default Cart;