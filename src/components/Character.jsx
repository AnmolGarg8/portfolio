import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const Eye = ({ position, mouse }) => {
  const eyeRef = useRef();
  const pupilRef = useRef();

  useFrame((state) => {
    if (!eyeRef.current || !pupilRef.current) return;

    // Calculate rotation to face mouse
    const x = (state.mouse.x * state.viewport.width) / 2;
    const y = (state.mouse.y * state.viewport.height) / 2;
    
    const target = new THREE.Vector3(x, y, 5);
    eyeRef.current.lookAt(target);
    
    // Pupil movement constrained within eye
    pupilRef.current.position.x = THREE.MathUtils.lerp(pupilRef.current.position.x, state.mouse.x * 0.15, 0.1);
    pupilRef.current.position.y = THREE.MathUtils.lerp(pupilRef.current.position.y, state.mouse.y * 0.15, 0.1);
  });

  return (
    <group position={position}>
      {/* Eye White */}
      <mesh ref={eyeRef}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="white" roughness={0.1} />
        
        {/* Pupil */}
        <mesh ref={pupilRef} position={[0, 0, 0.25]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#060608" emissive="#00E5FF" emissiveIntensity={0.5} />
        </mesh>
      </mesh>
    </group>
  );
};

const Character = () => {
  const group = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 0.5) * 0.1;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.mouse.x * 0.2, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.mouse.y * 0.2, 0.05);

    group.current.traverse((child) => {
      if (child.isMesh && child.material && child.material.name === 'glow') {
        child.material.emissiveIntensity = 2 + Math.sin(t * 3) * 1;
      }
    });
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Head */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial 
            color="#0C0C14" 
            roughness={0.2} 
            metalness={0.8}
            emissive="#7C3AED"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Cyber Headphones / Ears */}
        <mesh position={[1.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color="#7C3AED" />
        </mesh>
        <mesh position={[-1.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color="#7C3AED" />
        </mesh>

        {/* Eyes */}
        <Eye position={[0.4, 0.2, 0.8]} />
        <Eye position={[-0.4, 0.2, 0.8]} />

        {/* Stylized Mouth / Face Detail */}
        <mesh position={[0, -0.4, 0.9]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.2, 0.02, 16, 32, Math.PI]} />
          <meshStandardMaterial name="glow" color="#00E5FF" emissive="#00E5FF" emissiveIntensity={3} />
        </mesh>

        {/* Body (Simplified Cyber Suit) */}
        <mesh position={[0, -1.8, -0.2]}>
          <capsuleGeometry args={[0.6, 1.2, 4, 32]} />
          <meshStandardMaterial color="#0C0C14" roughness={0.3} metalness={0.9} />
          {/* Glowing chest piece */}
          <mesh position={[0, 0.4, 0.5]}>
            <boxGeometry args={[0.4, 0.4, 0.1]} />
            <meshStandardMaterial name="glow" color="#00E5FF" emissive="#00E5FF" emissiveIntensity={3} />
          </mesh>
        </mesh>
      </Float>

      {/* Lights inside the scene */}
      <pointLight position={[5, 5, 5]} intensity={1} color="#00E5FF" />
      <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
    </group>
  );
};

const CharacterWrapper = () => {
  return (
    <div className="character-canvas" style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      overflow: 'hidden',
      clipPath: 'inset(0 0 0 0)'
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#7C3AED" />
        <Character />
      </Canvas>
    </div>
  );
};

export default CharacterWrapper;
