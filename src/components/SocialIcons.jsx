import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import './styles/SocialIcons.css'

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" id="social">
        <span>
          <a href="https://github.com/anmolgarg" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://linkedin.com/in/anmol-garg2005" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="mailto:anmolgarg1605@gmail.com">
            <HiOutlineMail />
          </a>
        </span>
      </div>
      <a className="resume-button" href="#">
        RESUME
      </a>
    </div>
  )
}

export default SocialIcons
