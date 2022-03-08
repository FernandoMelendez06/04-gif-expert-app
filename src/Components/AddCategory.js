import React, { useState } from 'react';
import PropTypes from 'prop-types' ;

export const AddCategory = ( {setCategories} ) => {

    const [inputvalue, setinputvalue] = useState('');
    const handleInputchange = (e)=>{

        setinputvalue(e.target.value);

    }

    const handleSubmit= (e)=> {
        e.preventDefault();

        if( inputvalue.trim().length > 2 ){
          setCategories( cats=>[inputvalue, ...cats ] );
          setinputvalue('');
        }
    }

  return (
    
    <form onSubmit={handleSubmit}>
        <h2> Add Category </h2>
        
        <input type="text" 
        value={inputvalue}
        onChange={handleInputchange}
        > 

        </input>
        
    </form>
  )
}



AddCategory.propTypes = {

  setCategories: PropTypes.func.isRequired

}