import { useEffect, useRef } from 'react'

// Floating orb using CSS animation (faithful to moncy.dev's lavender sphere)
function GlowOrb() {
  return <div className="contact__orb" />
}

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <GlowOrb />

      <div className="contact__content">
        <h2 className="contact__heading reveal">CONTACT</h2>

        <div className="contact__grid">
          {/* Email + Location */}
          <div>
            <p className="contact__col-label">Email</p>
            <p className="contact__col-value">
              <a href="mailto:anmol@developer.com">anmol@developer.com</a>
            </p>

            <br />

            <p className="contact__col-label">Location</p>
            <p className="contact__col-value">Delhi, India</p>
          </div>

          {/* Social links */}
          <div>
            <p className="contact__col-label">Social</p>
            <div className="contact__social-list">
              {[
                { label: 'Github', href: 'https://github.com/' },
                { label: 'Linkedin', href: 'https://linkedin.com/' },
                { label: 'Twitter', href: 'https://twitter.com/' },
                { label: 'Instagram', href: 'https://instagram.com/' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social-link"
                >
                  {s.label} <span className="arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Credit */}
          <div className="contact__credit">
            <p>
              Designed and Developed<br />
              by <a href="#">Anmol Garg</a>
            </p>
            <p className="contact__copyright">© 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}
