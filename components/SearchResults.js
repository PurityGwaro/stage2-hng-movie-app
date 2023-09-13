'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import {MovieItem} from './MovieItem'

function SearchResults() {
    const searchResults = useSelector(state => state.searchMovies.searchResults)
    // const movies = searchResults
    console.log('search results', useSelector(state => state.searchMovies.searchResults))
  return (
    <div>
    <section className="flex flex-col items-center md:flex-wrap md:items-start md:flex-row">
        {searchResults?.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </section>

      search results go here
    </div>
  )
}

export default SearchResults
