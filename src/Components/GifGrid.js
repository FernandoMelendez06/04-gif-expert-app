import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

    const [images, setimages] = useState([]);

    useEffect( () => {     // permite realizar la ejecucion una vez y no renderiza hasta que cambia la cotegoria
        getGifs( category )
        .then( imgs => setimages( imgs )) ;

    },[category])

   
   

  return (

    <>
         <h3> {category} </h3>
    
        <div className='card-grid'>
            
            

                {
                    images.map(img=> (
                        <GifGridItem  key={img.id} {...img} />

                    ))

                }

            

        </div>
    </>


    
  )
}
