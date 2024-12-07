import { useContext } from "react"
import Card from "../Components/Card"
import { ContextGlobal } from "../Components/utils/global.context"

const Favs = () => {
  const { state, dispatch } = useContext(ContextGlobal)

  const handleResetFavs = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar todos los favoritos?')) {
      dispatch({ type: "RESET_FAVS" })
    }
  }

  return (
    <div className={`favs-container ${state.theme}`}>
      <h1>Dentistas Favoritos</h1>
      {state.favs.length > 0 && (
        <button onClick={handleResetFavs} className="reset-button">
          Limpiar Favoritos
        </button>
      )}
      <div className="card-grid">
        {state.favs.map(dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Favs
