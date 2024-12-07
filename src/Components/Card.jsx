import { useContext } from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { ContextGlobal } from "./utils/global.context"

const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(ContextGlobal)

  const toggleFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || []
    const isAlreadyFav = favs.some(fav => fav.id === id)
    
    if (isAlreadyFav) {
      // Confirmar antes de quitar de favoritos
      if (window.confirm('¿Deseas quitar este dentista de favoritos?')) {
        const newFavs = favs.filter(fav => fav.id !== id)
        localStorage.setItem('favs', JSON.stringify(newFavs))
        dispatch({ type: "REMOVE_FAV", payload: id })
      }
    } else {
      const dentist = { name, username, id }
      const newFavs = [...favs, dentist]
      localStorage.setItem('favs', JSON.stringify(newFavs))
      dispatch({ type: "ADD_FAV", payload: dentist })
    }
  }

  const isFavorite = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || []
    return favs.some(fav => fav.id === id)
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <div className="card-image">
          <img src="/images/doctor.jpg" alt="doctor" />
        </div>
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button 
        onClick={toggleFav} 
        className={`favButton ${isFavorite() ? 'favorite' : ''}`}
        aria-label={isFavorite() ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        title={isFavorite() ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        {isFavorite() ? '★' : '☆'}
      </button>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Card
