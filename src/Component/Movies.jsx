import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'

const Movies = () => {
    useEffect(() => {
        getMovies();
    }, [])

    const [movies, setMovies] = useState([])
    async function getMovies() {
        const moviename='captain'
        try {
            const res = await axios.get(`http://www.omdbapi.com/?apikey=7067084b&s=${moviename}`)
            const data = await res.data
            console.log(data)
            setMovies(data.Search)
        } catch (error) {

        }

    }
    return (
      <div className='home'>
      
      {movies.map(el=>(
       <Movie el={el}/>
     ))}
     
    
      </div>
      
    )
}

export default Movies