import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import './styles/Contact.css'

const Contact = () => {
  return (
    <section className="contact-section" style={{ width: 'var(--cWidth)', maxWidth: 'var(--cMaxWidth)', margin: 'auto' }}>
      <h3>Contact</h3>
      <div className="contact-flex">
        <div className="contact-box">
          <h4>EMAIL</h4>
          <p><a href="mailto:anmolgarg1605@gmail.com">anmolgarg1605@gmail.com</a></p>
          <h4>PHONE</h4>
          <p><a href="tel:+919625652435">+91 9625652435</a></p>
          <h4>LOCATION</h4>
          <p>Delhi, India</p>
        </div>
        <div className="contact-box">
          <h4>SOCIAL</h4>
          <a className="contact-social" href="https://github.com/anmolgarg" target="_blank" rel="noopener noreferrer">
            Github <FaArrowUpRightFromSquare style={{ fontSize: '12px', marginLeft: '4px' }} />
          </a>
          <a className="contact-social" href="https://linkedin.com/in/anmol-garg2005" target="_blank" rel="noopener noreferrer">
            Linkedin <FaArrowUpRightFromSquare style={{ fontSize: '12px', marginLeft: '4px' }} />
          </a>
          <a className="contact-social" href="mailto:anmolgarg1605@gmail.com">
            Email <FaArrowUpRightFromSquare style={{ fontSize: '12px', marginLeft: '4px' }} />
          </a>
        </div>
        <div className="contact-box contact-footer">
          <h2>Designed and Developed by <span>Anmol Garg</span></h2>
          <h5>© 2026</h5>
        </div>
      </div>
    </section>
  )
}

export default Contact
