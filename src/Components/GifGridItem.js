import React from 'react'

export const GifGridItem = ({id,title,url}) => {

   // console.log(id,title,url)
  return (


    <div className="card animate__animated animate__bounce">
        <img className="card"  src={url} alt={title}></img>
        <p className="card">{title}</p>
    </div>
  )
}



