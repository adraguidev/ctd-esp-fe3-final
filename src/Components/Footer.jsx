import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const { state } = useContext(ContextGlobal)

  return (
    <footer className={state.theme}>
      <div className="footer-container">
        <div className="footer-logo">
          <p>Powered by</p>
          <img 
            src="/images/DH.png" 
            alt='DH-logo'
            className="dh-logo"
          />
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-instagram.png" alt="instagram" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-whatsapp.png" alt="whatsapp" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-tiktok.png" alt="tiktok" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
