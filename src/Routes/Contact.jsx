import { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'

const Contact = () => {
  const { state } = useContext(ContextGlobal)

  return (
    <div className={`contact-container ${state.theme}`}>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus consultas y nos pondremos en contacto contigo</p>
      <Form/>
    </div>
  )
}

export default Contact