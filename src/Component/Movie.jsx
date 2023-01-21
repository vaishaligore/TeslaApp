import React from 'react'

const Movie = ({el}) => {
  return (
    <div className='card' key={el.imdbID}>

    <img src={el.Poster} alt="poster image"/>
    <h3>{el.Title}</h3>
    
          </div>
  )
}

export default Movie