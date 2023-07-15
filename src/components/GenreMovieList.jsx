import React from 'react'
import GenresList from '../constant/GenresList'
import MovieList from './MovieList'

const GenreMovieList = () => {
  return (
    <div>
        {GenresList.genere.map((item,index)=>index<=4 && (
            <div className='p-8 px-8 md:px-16'>
                <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                <MovieList genereId={item.id} index_={index}/>
                </div>
        ))}
    </div>
  )
}

export default GenreMovieList