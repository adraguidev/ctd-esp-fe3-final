import { useEffect, useContext, useMemo, useState } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal)
  const [loading, setLoading] = useState(true)

  const dentistCards = useMemo(() => {
    return state.data.map(dentist => (
      <Card 
        key={dentist.id}
        name={dentist.name}
        username={dentist.username}
        id={dentist.id}
      />
    ))
  }, [state.data])

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_DATA', payload: data })
        setLoading(false)
      })
      .catch(err => {
        console.error('Error:', err)
        setLoading(false)
      })
  }, [])

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      {loading ? (
        <div className="loading">Cargando...</div>
      ) : (
        <div className='card-grid'>
          {dentistCards}
        </div>
      )}
    </main>
  )
}

export default Home