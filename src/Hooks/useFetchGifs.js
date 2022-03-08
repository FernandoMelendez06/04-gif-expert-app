//use es un etandar para indicarque es un hook

import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category) => {
  
    const [state, setstate] = useState({

        data: [],
        loading: true
    });

    useEffect( () => {  
        
        // permite realizar la ejecucion una vez y no renderiza hasta que cambia la cotegoria
        getGifs( category )
            .then( imgs => {

                setTimeout(() => {
                
                    setstate({
                        data: imgs,
                        loading: false 

                    });

                },3000);


            });

        
    },[category])



    return state; // {data[], loading: true }

}
