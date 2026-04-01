import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, RoundedBox, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Eye = ({ position }) => {
  const eyeRef = useRef();
  const pupilRef = useRef();

  useFrame((state) => {
    if (!eyeRef.current || !pupilRef.current) return;
    const x = (state.mouse.x * state.viewport.width) / 2;
    const y = (state.mouse.y * state.viewport.height) / 2;
    const target = new THREE.Vector3(x, y, 5);
    eyeRef.current.lookAt(target);

    // Subtle pupil lag/movement
    pupilRef.current.position.x = THREE.MathUtils.lerp(pupilRef.current.position.x, state.mouse.x * 0.1, 0.1);
    pupilRef.current.position.y = THREE.MathUtils.lerp(pupilRef.current.position.y, state.mouse.y * 0.1, 0.1);
  });

  return (
    <group position={position}>
      <mesh ref={eyeRef}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial color="white" roughness={0.1} />
        {/* Reflection Highlight */}
        <mesh position={[0.08, 0.08, 0.18]}>
           <sphereGeometry args={[0.04, 16, 16]} />
           <meshStandardMaterial color="white" emissive="white" emissiveIntensity={2} />
        </mesh>
        <mesh ref={pupilRef} position={[0, 0, 0.19]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} />
        </mesh>
      </mesh>
    </group>
  );
};

const Character = () => {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 0.5) * 0.1;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.mouse.x * 0.4, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.mouse.y * 0.2, 0.05);
  });

  return (
    <group ref={group} scale={1.3}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
        {/* Head */}
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.9, 64, 64]} />
          <meshStandardMaterial color="#FFDBAC" roughness={0.3} />
        </mesh>

        {/* Improved Slicked-Back Hair */}
        <group position={[0, 0.75, -0.1]}>
          {/* Main Volume */}
          <RoundedBox args={[1.25, 0.7, 1.1]} radius={0.25} smoothness={4} position={[0, 0.2, 0]}>
             <meshStandardMaterial color="#211510" roughness={0.8} />
          </RoundedBox>
          {/* Front Quiff */}
          <RoundedBox args={[1.0, 0.5, 0.6]} radius={0.2} smoothness={4} position={[0, 0.5, 0.4]} rotation={[0.4, 0, 0]}>
             <meshStandardMaterial color="#211510" />
          </RoundedBox>
          {/* Side Burn Left */}
          <RoundedBox args={[0.2, 0.6, 0.4]} radius={0.1} position={[0.9, -0.2, 0]}>
             <meshStandardMaterial color="#211510" />
          </RoundedBox>
          {/* Side Burn Right */}
          <RoundedBox args={[0.2, 0.6, 0.4]} radius={0.1} position={[-0.9, -0.2, 0]}>
             <meshStandardMaterial color="#211510" />
          </RoundedBox>
        </group>

        {/* Glasses - Smart Type */}
        <group position={[0, 0.25, 0.72]}>
          <mesh position={[0.42, 0, 0]}>
            <torusGeometry args={[0.3, 0.04, 16, 48]} />
            <meshStandardMaterial color="#111" metalness={0.6} roughness={0.1} />
          </mesh>
          <mesh position={[-0.42, 0, 0]}>
            <torusGeometry args={[0.3, 0.04, 16, 48]} />
            <meshStandardMaterial color="#111" metalness={0.6} roughness={0.1} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.15, 0.04, 0.04]} />
            <meshStandardMaterial color="#111" />
          </mesh>
        </group>

        {/* Eyes */}
        <Eye position={[0.42, 0.25, 0.6]} />
        <Eye position={[-0.42, 0.25, 0.6]} />

        {/* Attractive Smile - Clear Broad U Shape */}
        <group position={[0, -0.32, 0.88]}>
          <mesh rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[0.2, 0.025, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#8B4343" roughness={0.3} />
          </mesh>
        </group>

        {/* Nose */}
        <mesh position={[0, 0.05, 0.88]} scale={[0.8, 1.2, 0.8]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#EEA098" />
        </mesh>

        {/* Ears */}
        <mesh position={[0.92, 0.15, 0]} rotation={[0, 0, 0.1]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        <mesh position={[-0.92, 0.15, 0]} rotation={[0, 0, -0.1]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>

        {/* Smart Sweater / Outfit */}
        <mesh position={[0, -1.8, -0.2]}>
          <capsuleGeometry args={[0.65, 1.4, 8, 32]} />
          <meshStandardMaterial color="#D35400" roughness={0.8} />
          {/* Subtle "V-Neck" Detail */}
          <group position={[0, 0.6, 0.35]} rotation={[0.5, 0, 0]}>
             <mesh>
               <boxGeometry args={[0.4, 0.4, 0.1]} />
               <meshStandardMaterial color="#B33F00" />
             </mesh>
          </group>
        </mesh>
      </Float>

      <ContactShadows position={[0, -3.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} />
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
      zIndex: 1
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 35 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.8} />
        {/* Main Studio Light */}
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2.5} />
        {/* Rim Light for that "Premium/Attractive" look */}
        <pointLight position={[-10, 5, -5]} intensity={3} color="#00E5FF" />
        <pointLight position={[10, -5, -5]} intensity={2} color="#7C3AED" />
        <directionalLight position={[0, 5, 5]} intensity={0.5} />
        <Character />
      </Canvas>
    </div>
  );
};

export default CharacterWrapper;
