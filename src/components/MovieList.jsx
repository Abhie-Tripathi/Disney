import React, { useEffect, useState, useRef } from 'react'
import GlobalAPI from '../services/GlobalAPI'
import MovieCard from './MovieCard'
import {IoChevronBackOutline} from "react-icons/io5"

const MovieList = ({genereId}) => {
    const elementRef = useRef()
    const [movieList, setMovieList] = useState([])


    useEffect(()=>{
        getMovieByGenreId()
    },[])

    const getMovieByGenreId = () =>{
        GlobalAPI.getMovieByGenreId(genereId).then(resp=>setMovieList(resp.data.results))
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

  return (
    <div className='relative'>
        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            mt-[80px]`}/>
    <div className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5' ref={elementRef}>
        {movieList.map((item,index)=>(
            <MovieCard movie={item}/>
        ))}
    </div>
    </div>
  )
}

export default MovieList