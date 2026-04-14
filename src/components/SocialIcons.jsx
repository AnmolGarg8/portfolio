import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import './styles/SocialIcons.css'

const SocialIcons = () => {
  return (
    <>
      <div className="icons-section" id="social">
        <a href="https://github.com/anmolgarg" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/anmol-garg2005" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="mailto:anmolgarg1605@gmail.com">
          <HiOutlineMail />
        </a>
      </div>
      
      <a className="resume-button" href="/AnmolGarg_Resume.pdf" target="_blank" rel="noopener noreferrer">
        RESUME
      </a>
    </>
  )
}

export default SocialIcons
