import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import './styles/Contact.css'

const Contact = () => {
  const canvasRef = useRef(null)

  // FIX 13: 3D purple sphere above Contact heading
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 3

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(200, 200)
    renderer.setPixelRatio(window.devicePixelRatio)

    const geometry = new THREE.SphereGeometry(1, 64, 64)
    const material = new THREE.MeshStandardMaterial({
      color: 0x6c63ff,
      roughness: 0.3,
      metalness: 0.5,
    })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    const ambientLight = new THREE.AmbientLight(0x6c63ff, 0.6)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffffff, 2, 10)
    pointLight.position.set(2, 3, 3)
    scene.add(pointLight)

    let animId
    function animate() {
      animId = requestAnimationFrame(animate)
      sphere.rotation.y += 0.004
      sphere.rotation.x += 0.001
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <section className="contact-section" style={{ width: 'var(--cWidth)', maxWidth: 'var(--cMaxWidth)', margin: 'auto' }}>
      {/* FIX 13: 3D sphere with glow disc */}
      <div className="contact-sphere-wrap">
        <canvas ref={canvasRef} id="contact-sphere-canvas" width="200" height="200" />
        <div className="contact-sphere-glow" />
      </div>

      <h3 className="contact-heading">Contact</h3>
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
          <h5>© 2025</h5>
        </div>
      </div>
    </section>
  )
}

export default Contact
