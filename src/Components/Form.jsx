import { useState } from "react"

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess('')
    
    if (formData.fullName.length <= 5) {
      setError('El nombre debe tener más de 5 caracteres')
      setIsSubmitting(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Por favor ingrese un email válido')
      setIsSubmitting(false)
      return
    }

    // Simulamos envío
    setTimeout(() => {
      setSuccess(`Gracias ${formData.fullName}, te contactaremos cuando antes vía mail`)
      setFormData({ fullName: '', email: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="fullName">Nombre completo:</label>
        <input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={e => setFormData({...formData, fullName: e.target.value})}
          placeholder="Ingresa tu nombre"
          disabled={isSubmitting}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
          placeholder="Ingresa tu email"
          disabled={isSubmitting}
        />
      </div>

      <button 
        type="submit" 
        className="submit-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>

      {error && <div className="message error-message">{error}</div>}
      {success && <div className="message success-message">{success}</div>}
    </form>
  )
}

export default Form
