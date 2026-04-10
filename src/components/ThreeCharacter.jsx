import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Model() {
  const group = useRef()
  const { nodes, materials, animations, scene } = useGLTF('/models/character.glb', '/draco/')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (!group.current) return;

    // Play intro or basic animation
    if (actions && Object.keys(actions).length > 0) {
      const intro = actions['introAnimation'] || Object.values(actions)[0]
      if (intro) intro.play()
    }

    // Set up GSAP timeline for the 3D model
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    })

    // Initial position (Hero Center)
    gsap.set(group.current.position, { x: 0, y: -2, z: 0 })
    gsap.set(group.current.rotation, { y: 0 })
    gsap.set(group.current.scale, { x: 1, y: 1, z: 1 })

    // Scroll to About Section (Move to Left)
    tl.to(group.current.position, { x: -3, y: -2.5, z: 2 }, 0)
    tl.to(group.current.rotation, { x: 0, y: Math.PI / 8, z: 0 }, 0)

    // Scroll to WhatIDo Section (Move to Right/Center)
    tl.to(group.current.position, { x: -2, y: -4, z: 1 }, 1)
    tl.to(group.current.rotation, { x: 0, y: Math.PI / 12, z: 0 }, 1)

    return () => {
      tl.kill();
    }
  }, [actions])

  // Simple floating 
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime()
      group.current.position.y += Math.sin(t * 2) * 0.002
    }
  })

  // Fix textures if necessary
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [scene])

  return <primitive ref={group} object={scene} />
}

export default function ThreeCharacter() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 10 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 40 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
        <Environment preset="city" />
        <React.Suspense fallback={null}>
          <Model />
        </React.Suspense>
      </Canvas>
    </div>
  )
}
