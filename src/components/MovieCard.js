import React from 'react'
import './MovieCard.css';
import ReactStars from 'react-rating-stars-component';
function MovieCard({movie}) {
  return (
    <div className="hero-container">
		<div className="main-container">
			<div className="poster-container">
				<img src={movie.posterurl} width="200" height="300" className="poster" />
			</div>
			<div className="ticket-container">
				<div className="ticket__content">
					<h4 className="ticket__movie-title">{movie.name}</h4>
					<p className="ticket__movie-slogan">
						{movie.description}
					</p>
					<ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
	edit={false}
	value={movie.rating}
  />,
				</div>
			</div>
		</div>
	</div>

  )
}

export default MovieCard