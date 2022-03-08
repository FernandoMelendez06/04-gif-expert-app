import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['ONE PUCH','SAMURAI X ', 'NARUTO']

    const [categories,setCategories] = useState(['Samuray X']);

//const handleAdd= ()=>{
   // setCategories([ ...categories, 'HunterXHunter']);

//}


  return (

    <>

        <h1>GifExpertApp</h1>
        <AddCategory setCategories = { setCategories } />
        <hr />
        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
            {
                categories.map( category=>(

                    <GifGrid
                    key={category}
                    category={category} /> ))

            }


        </ol>
        
    </>
  )
}


//<li key={category}>{category}</li>