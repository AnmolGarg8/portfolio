import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, RoundedBox, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const FloatingPanel = ({ position, color }) => (
  <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
    <RoundedBox args={[0.7, 0.9, 0.05]} radius={0.06}>
      <meshStandardMaterial color="#F0F0F0" />
      <mesh position={[0, 0, 0.03]} scale={[0.6, 0.6, 1]}>
        <planeGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
    </RoundedBox>
  </Float>
);

const Eye = ({ position }) => {
  const eyeRef = useRef();
  const pupilRef = useRef();

  useFrame((state) => {
    if (!eyeRef.current || !pupilRef.current) return;
    const x = (state.mouse.x * state.viewport.width) / 2;
    const y = (state.mouse.y * state.viewport.height) / 2;
    eyeRef.current.lookAt(new THREE.Vector3(x, y, 5));
    pupilRef.current.position.x = THREE.MathUtils.lerp(pupilRef.current.position.x, state.mouse.x * 0.08, 0.1);
    pupilRef.current.position.y = THREE.MathUtils.lerp(pupilRef.current.position.y, state.mouse.y * 0.08, 0.1);
  });

  return (
    <group position={position}>
      <mesh ref={eyeRef}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="white" />
        <mesh ref={pupilRef} position={[0, 0, 0.18]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#111" />
        </mesh>
      </mesh>
    </group>
  );
};

const Character = () => {
  const group = useRef();

  return (
    <group ref={group} scale={1.2} position={[0, -1, 0]}>
      {/* Desk Surface */}
      <RoundedBox args={[6, 0.1, 4]} radius={0.02} position={[1, 0, 0]}>
        <meshStandardMaterial color="#30336b" />
      </RoundedBox>
      <mesh position={[0.5, -0.6, 1.5]}>
        <cylinderGeometry args={[0.05, 0.05, 1.2]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Monitor */}
      <group position={[1.5, 1, -0.8]} rotation={[0, -0.3, 0]}>
        <RoundedBox args={[1.4, 0.9, 0.08]} radius={0.04}>
          <meshStandardMaterial color="#000" />
        </RoundedBox>
        <mesh position={[0, -0.6, 0]}>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      </group>

      {/* Chair */}
      <group position={[0, 0.6, 1.2]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
          <meshStandardMaterial color="#3c40c6" />
        </mesh>
      </group>

      {/* The Boy */}
      <group position={[0, 1.6, 1.1]}>
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.1}>
          {/* Detailed Head */}
          <mesh position={[0, 1, 0]}>
            <sphereGeometry args={[0.7, 64, 64]} />
            <meshStandardMaterial color="#FFDBAC" />
          </mesh>
          {/* Stylized Hair */}
          <group position={[0, 1.45, -0.1]}>
             <RoundedBox args={[1.0, 0.5, 0.8]} radius={0.2} position={[0, 0.1, 0.1]}>
                <meshStandardMaterial color="#211510" />
             </RoundedBox>
          </group>
          {/* Ears */}
          <mesh position={[0.72, 0.9, 0]} scale={[1, 1.2, 1]}>
             <sphereGeometry args={[0.12, 16, 16]} />
             <meshStandardMaterial color="#FFDBAC" />
          </mesh>
          <mesh position={[-0.72, 0.9, 0]} scale={[1, 1.2, 1]}>
             <sphereGeometry args={[0.12, 16, 16]} />
             <meshStandardMaterial color="#FFDBAC" />
          </mesh>
          {/* Eyes & Glasses */}
          <Eye position={[0.3, 1, 0.55]} />
          <Eye position={[-0.3, 1, 0.55]} />
          <group position={[0, 1.02, 0.62]}>
            <mesh position={[0.3, 0, 0]}><torusGeometry args={[0.24, 0.03, 16, 32]} /><meshStandardMaterial color="#111" /></mesh>
            <mesh position={[-0.3, 0, 0]}><torusGeometry args={[0.24, 0.03, 16, 32]} /><meshStandardMaterial color="#111" /></mesh>
          </group>
          {/* Smile */}
          <group position={[0, 0.65, 0.63]} rotation={[0, 0, Math.PI]}>
             <torusGeometry args={[0.15, 0.025, 16, 32, Math.PI / 1.1]} />
             <meshStandardMaterial color="#8B4343" />
          </group>
          {/* Body */}
          <mesh position={[0, 0.1, -0.1]}>
            <capsuleGeometry args={[0.5, 0.9, 8, 32]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        </Float>
      </group>

      {/* Floating Elements (Same to same as reference) */}
      <FloatingPanel position={[-2.2, 4.2, 0.5]} color="#a29bfe" />
      <FloatingPanel position={[-2.8, 2.8, 1.5]} color="#ff7675" />
      <FloatingPanel position={[1.5, 4.8, 0]} color="#55efc4" />
      <FloatingPanel position={[3.2, 2.5, 2]} color="#fdcb6e" />

      <ContactShadows position={[0, -0.5, 0]} opacity={0.5} scale={15} blur={2.5} />
    </group>
  );
};

const CharacterWrapper = () => (
  <div className="character-canvas" style={{ width: '100%', height: '100%', position: 'absolute' }}>
    <Canvas gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 3, 12]} fov={30} />
      <ambientLight intensity={1.2} />
      <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2.5} />
      <pointLight position={[-10, 5, 10]} intensity={2} color="#00E5FF" />
      <Character />
    </Canvas>
  </div>
);

export default CharacterWrapper;
