export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__logo">AG</div>
      <div className="footer__copy">
        © {year} Anmol Garg. Built with React + GSAP.
      </div>
      <div className="footer__links">
        <a href="https://github.com/AnmolGarg8" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/anmol-garg2005" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:anmolgarg1605@gmail.com">Email</a>
      </div>
    </footer>
  )
}
