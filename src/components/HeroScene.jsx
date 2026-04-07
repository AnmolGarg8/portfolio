import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

// ── Distorted Brain Orb ────────────────────────────────
function BrainOrb({ mouseRef }) {
  const meshRef = useRef()
  const wireRef = useRef()
  const innerRef = useRef()
  const outerRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (!meshRef.current) return

    // Mouse parallax
    const mx = mouseRef.current.x
    const my = mouseRef.current.y
    meshRef.current.rotation.y += (mx * 0.5 - meshRef.current.rotation.y) * 0.055
    meshRef.current.rotation.x += (-my * 0.3 - meshRef.current.rotation.x) * 0.055

    // Subtle breathe scale
    const s = 1 + Math.sin(t * 1.1) * 0.022
    meshRef.current.scale.setScalar(s)

    // Wire frame slow rotate
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.12
      wireRef.current.rotation.x = t * 0.07
    }

    // Outer glow pulse
    if (outerRef.current) {
      outerRef.current.material.opacity = 0.06 + Math.sin(t * 0.8) * 0.03
      outerRef.current.rotation.y = -t * 0.1
    }
  })

  return (
    <group ref={meshRef}>
      {/* Outer volumetric glow */}
      <mesh ref={outerRef}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial
          color="#4c1d95"
          transparent
          opacity={0.07}
          side={THREE.BackSide}
          emissive="#7c3aed"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Main distorted orb */}
      <mesh>
        <sphereGeometry args={[1.05, 128, 128]} />
        <MeshDistortMaterial
          color="#1a0a35"
          emissive="#6d28d9"
          emissiveIntensity={0.6}
          metalness={0.95}
          roughness={0.05}
          distort={0.38}
          speed={2.8}
          transparent
          opacity={0.97}
        />
      </mesh>

      {/* Glowing core */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.48, 32, 32]} />
        <meshStandardMaterial
          color="#c4b5fd"
          emissive="#06b6d4"
          emissiveIntensity={3.5}
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Icosahedron wireframe overlay */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.15, 2]} />
        <meshBasicMaterial
          color="#7c3aed"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  )
}

// ── Orbiting Rings ─────────────────────────────────────
function OrbitRings({ mouseRef }) {
  const ring1 = useRef()
  const ring2 = useRef()
  const ring3 = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const mx = mouseRef.current.x
    const my = mouseRef.current.y

    if (ring1.current) {
      ring1.current.rotation.z = t * 0.28
      ring1.current.rotation.x += (my * 0.35 - ring1.current.rotation.x) * 0.04
    }
    if (ring2.current) {
      ring2.current.rotation.y = t * 0.42
      ring2.current.rotation.z = Math.PI / 4 + mx * 0.25
    }
    if (ring3.current) {
      ring3.current.rotation.x = t * 0.18
      ring3.current.rotation.y = Math.PI / 3.5 + t * 0.13
    }
  })

  return (
    <>
      <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.65, 0.013, 16, 120]} />
        <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={1.8} />
      </mesh>

      <mesh ref={ring2} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.06, 0.009, 16, 120]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1.4} transparent opacity={0.8} />
      </mesh>

      <mesh ref={ring3} rotation={[0.2, 0, Math.PI / 3]}>
        <torusGeometry args={[2.5, 0.006, 16, 120]} />
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={1.0} transparent opacity={0.6} />
      </mesh>
    </>
  )
}

// ── Orbiting Satellite Dots ────────────────────────────
function Satellites() {
  const groupRef = useRef()
  const config = useMemo(() => (
    Array.from({ length: 10 }, (_, i) => ({
      angle: (i / 10) * Math.PI * 2,
      radius: 1.85 + (i % 3) * 0.35,
      speed: 0.25 + i * 0.04,
      size: 0.04 + (i % 3) * 0.03,
      color: i % 2 === 0 ? '#7c3aed' : '#06b6d4',
      phase: i * 0.7,
    }))
  ), [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      const c = config[i]
      const a = c.angle + t * c.speed
      child.position.x = Math.cos(a) * c.radius
      child.position.y = Math.sin(a * 0.55) * 0.6
      child.position.z = Math.sin(a) * c.radius * 0.35
      child.material.emissiveIntensity = 1.5 + Math.sin(t + c.phase) * 0.8
    })
  })

  return (
    <group ref={groupRef}>
      {config.map((c, i) => (
        <mesh key={i}>
          <sphereGeometry args={[c.size, 8, 8]} />
          <meshStandardMaterial color={c.color} emissive={c.color} emissiveIntensity={1.5} />
        </mesh>
      ))}
    </group>
  )
}

// ── Floating ambient particles ─────────────────────────
function AmbientParticles() {
  const groupRef = useRef()
  const nodes = useMemo(() => (
    Array.from({ length: 18 }, (_, i) => ({
      pos: [
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3 - 2,
      ],
      size: 0.025 + Math.random() * 0.05,
      phase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.5 ? '#7c3aed' : '#06b6d4',
    }))
  ), [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      const n = nodes[i]
      child.position.y = n.pos[1] + Math.sin(t * 0.5 + n.phase) * 0.35
      child.material.opacity = 0.2 + Math.sin(t * 0.8 + n.phase) * 0.3
    })
  })

  return (
    <group ref={groupRef}>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <sphereGeometry args={[n.size, 6, 6]} />
          <meshStandardMaterial
            color={n.color}
            emissive={n.color}
            emissiveIntensity={2}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  )
}

// ── Animated lights ────────────────────────────────────
function SceneLights() {
  const purpleRef = useRef()
  const cyanRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (purpleRef.current) purpleRef.current.intensity = 3.5 + Math.sin(t * 1.3) * 1.0
    if (cyanRef.current) cyanRef.current.intensity = 2.5 + Math.sin(t * 2.1 + 1) * 0.7
  })

  return (
    <>
      <ambientLight intensity={0.12} color="#1a0a35" />
      <pointLight ref={purpleRef} color="#7c3aed" intensity={3.5} position={[-2.5, 2.5, 2.5]} distance={12} />
      <pointLight ref={cyanRef} color="#06b6d4" intensity={2.5} position={[3, -1.5, 1.5]} distance={10} />
      <pointLight color="#a78bfa" intensity={1.5} position={[0, 3.5, -3]} distance={12} />
      <directionalLight color="#f0eeff" intensity={0.3} position={[5, 5, 5]} />
    </>
  )
}

// ── Main Scene Export ──────────────────────────────────
export default function HeroScene({ mouseRef }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 50 }}
      style={{ position: 'absolute', inset: 0, zIndex: 2 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
    >
      <SceneLights />

      {/* Floating container with gentle drift */}
      <Float speed={1.2} rotationIntensity={0.06} floatIntensity={0.25}>
        <group>
          <BrainOrb mouseRef={mouseRef} />
          <OrbitRings mouseRef={mouseRef} />
          <Satellites />
        </group>
      </Float>

      <AmbientParticles />

      {/* Deep starfield background */}
      <Stars
        radius={70}
        depth={40}
        count={2500}
        factor={2}
        saturation={0.6}
        fade
        speed={0.2}
      />
    </Canvas>
  )
}
