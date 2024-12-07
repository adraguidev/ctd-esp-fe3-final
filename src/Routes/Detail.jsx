import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

const Detail = () => {
  const { id } = useParams()
  const [dentist, setDentist] = useState(null)
  const [loading, setLoading] = useState(true)
  const { state } = useContext(ContextGlobal)

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setDentist(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching dentist details:', err)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className={`detail-container ${state.theme}`}>
        <div className="loading">Cargando información del dentista...</div>
      </div>
    )
  }

  if (!dentist) {
    return (
      <div className={`detail-container ${state.theme}`}>
        <div className="error">No se pudo encontrar la información del dentista</div>
      </div>
    )
  }

  return (
    <main className={state.theme}>
      <div className="detail-container">
        <div className="detail-card">
          <div className="detail-header">
            <div className="detail-image">
              <img src="/images/doctor.jpg" alt={dentist.name} />
            </div>
            <div className="detail-info">
              <h1>{dentist.name}</h1>
              <p>@{dentist.username}</p>
            </div>
          </div>
          
          <table className="detail-table">
            <tbody>
              <tr>
                <th>Email</th>
                <td>
                  <a href={`mailto:${dentist.email}`}>
                    {dentist.email}
                  </a>
                </td>
              </tr>
              <tr>
                <th>Teléfono</th>
                <td>
                  <a href={`tel:${dentist.phone}`}>
                    {dentist.phone}
                  </a>
                </td>
              </tr>
              <tr>
                <th>Sitio Web</th>
                <td>
                  <a href={`https://${dentist.website}`} target="_blank" rel="noopener noreferrer">
                    {dentist.website}
                  </a>
                </td>
              </tr>
              <tr>
                <th>Compañía</th>
                <td>{dentist.company?.name}</td>
              </tr>
              <tr>
                <th>Dirección</th>
                <td>
                  {dentist.address?.street}, {dentist.address?.suite}
                  <br />
                  {dentist.address?.city}, {dentist.address?.zipcode}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default Detail