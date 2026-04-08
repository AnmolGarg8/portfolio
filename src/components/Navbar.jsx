import './styles/Navbar.css'

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="nav-fade" />
      <header className="header">
        <a href="#" className="navbar-title">anmolgarg.dev /&gt;</a>
        <a href="mailto:anmolgarg1605@gmail.com" className="navbar-connect">
          anmolgarg1605@gmail.com
        </a>
        <ul>
          <li onClick={() => scrollTo('.about-section')}>ABOUT</li>
          <li onClick={() => scrollTo('.work-section')}>WORK</li>
          <li onClick={() => scrollTo('.contact-section')}>CONTACT</li>
        </ul>
      </header>
    </>
  )
}

export default Navbar
