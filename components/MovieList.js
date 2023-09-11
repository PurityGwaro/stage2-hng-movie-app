"use client"
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '@/redux/moviesSlice';
import { getMovies } from '@/app/api/getMovies';

function MovieList() {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies.movies)

    useEffect(() => {
        const moviesData = async () => {
            const data = await getMovies()
            dispatch(setMovies(data))
        }
        moviesData()
    },[dispatch])
    console.log('this is the list: ', movies)
  return (
    <div>
      List of movie items goes here
    </div>
  )
}

export default MovieList
