import React from 'react';

const Country = (props) => {
    const {name, population, flag} = props.country;
    const flagStyle = { height:'100px'};
    return (
        <div>
            <h4>This is : {name.common}</h4>
            <img  style={flagStyle} src={flag} alt="" />
            <h5>Population : {population}</h5>
            
            
        </div>
    );
};

export default Country;