import React from 'react';

const Country = (props) => {
    const {name, population, flag} = props.country;
    const flagStyle = { height:'100px'};
    const countryStyle = {border:'1px solid black', margin:'10px',padding:'5px'};
    const handleAddCountry = props.handleAddCountry;  
    return (
        <div style={countryStyle}>
            <h4>This is : {name.common}</h4>
            <img  style={flagStyle} src={flag} alt="" />
            <h5>Population : {population}</h5>
            <br />
            <button onClick={()=>handleAddCountry(props.country)}>Add Country population :</button>
            
            
        </div>
    );
};

export default Country;