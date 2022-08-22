import React from 'react'
import MovieList from '../components/MovieList'
import Search from '../components/Search'

function Home() {
  return (
    <div>
        <Search/>
        <MovieList/>
    </div>
  )
}

export default Home