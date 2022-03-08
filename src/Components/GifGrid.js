import React  from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs( category);    

    // const [images, setimages] = useState([]);

    

   
   

  return (

    <>
         <h3> {category} </h3>

           { loading && <p>Loanding</p> }
        <div className='card-grid'>
            
            

                {
                    data.map(img=> (
                        <GifGridItem  key={img.id} {...img} />

                    ))

                }

        
        </div>
    </>


    
  )
}
