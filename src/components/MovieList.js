import React  from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie';



function MovieList({movies,setMovies,text,rate}) {


  return (
    <div>
      <AddMovie movies={movies} setMovies={setMovies}/>
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", marginTop:"200px",marginBottom:"100px"}}>
    {movies.filter((el)=>el.name.toUpperCase().includes(text.toUpperCase())&& el.rating >=rate ).map((el)=><MovieCard movie={el}/>)}
    </div>
    </div>
  )
}

export default MovieList