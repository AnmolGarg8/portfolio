import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, ContactShadows, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Eye = ({ position, mouse }) => {
  const eyeRef = useRef();
  const pupilRef = useRef();

  useFrame((state) => {
    if (!eyeRef.current || !pupilRef.current) return;
    const x = (state.mouse.x * state.viewport.width) / 2;
    const y = (state.mouse.y * state.viewport.height) / 2;
    const target = new THREE.Vector3(x, y, 5);
    eyeRef.current.lookAt(target);

    // Pupil move
    pupilRef.current.position.x = THREE.MathUtils.lerp(pupilRef.current.position.x, state.mouse.x * 0.12, 0.1);
    pupilRef.current.position.y = THREE.MathUtils.lerp(pupilRef.current.position.y, state.mouse.y * 0.12, 0.1);
  });

  return (
    <group position={position}>
      <mesh ref={eyeRef}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial color="white" roughness={0.1} />
        <mesh ref={pupilRef} position={[0, 0, 0.18]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#402010" roughness={0.3} />
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
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.mouse.x * 0.3, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.mouse.y * 0.2, 0.05);
  });

  return (
    <group ref={group} scale={1.2}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
        {/* Head */}
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.9, 64, 64]} />
          <meshStandardMaterial color="#FFDBAC" roughness={0.4} />
        </mesh>

        {/* Hair - Stylized "Groomed" blocks */}
        <group position={[0, 0.8, -0.1]}>
          <RoundedBox args={[1.2, 0.6, 1]} radius={0.2} smoothness={4} position={[0, 0.2, 0]}>
             <meshStandardMaterial color="#2D1B0E" roughness={0.6} />
          </RoundedBox>
          <RoundedBox args={[0.8, 0.4, 0.4]} radius={0.15} smoothness={4} position={[0.2, 0.5, 0.3]} rotation={[0.2, 0, 0.1]}>
             <meshStandardMaterial color="#2D1B0E" />
          </RoundedBox>
        </group>

        {/* Ears */}
        <mesh position={[0.95, 0.1, 0]} rotation={[0, 0, 0.2]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        <mesh position={[-0.95, 0.1, 0]} rotation={[0, 0, -0.2]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>

        {/* Glasses */}
        <group position={[0, 0.2, 0.75]}>
          {/* Left Lens */}
          <mesh position={[0.42, 0, 0]}>
            <torusGeometry args={[0.28, 0.03, 16, 32]} />
            <meshStandardMaterial color="#222" metalness={0.5} roughness={0.2} />
          </mesh>
          {/* Right Lens */}
          <mesh position={[-0.42, 0, 0]}>
            <torusGeometry args={[0.28, 0.03, 16, 32]} />
            <meshStandardMaterial color="#222" metalness={0.5} roughness={0.2} />
          </mesh>
          {/* Bridge */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.2, 0.03, 0.03]} />
            <meshStandardMaterial color="#222" />
          </mesh>
        </group>

        {/* Eyes */}
        <Eye position={[0.4, 0.2, 0.65]} />
        <Eye position={[-0.4, 0.2, 0.65]} />

        {/* Nose */}
        <mesh position={[0, 0, 0.85]} scale={[1, 1.5, 1]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#EEA098" />
        </mesh>

        {/* Smiling Mouth */}
        <group position={[0, -0.4, 0.8]} rotation={[0.1, 0, 0]}>
          <mesh>
            <torusGeometry args={[0.25, 0.02, 16, 32, Math.PI / 1.5]} rotation={[0, 0, Math.PI + 0.5]} />
            <meshStandardMaterial color="#884444" />
          </mesh>
        </group>

        {/* Sweater / Body */}
        <mesh position={[0, -1.8, -0.2]}>
          <capsuleGeometry args={[0.7, 1.4, 8, 32]} />
          <meshStandardMaterial color="#D35400" roughness={0.8} /> {/* Orange Sweater */}
          {/* Collar */}
          <mesh position={[0, 0.65, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
             <torusGeometry args={[0.35, 0.12, 16, 32]} />
             <meshStandardMaterial color="#B33F00" />
          </mesh>
        </mesh>
      </Float>

      <ContactShadows position={[0, -3.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
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
        <ambientLight intensity={1.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, 5, 10]} intensity={1.5} color="#FFE0BD" />
        <directionalLight position={[0, 5, 5]} intensity={0.5} />
        <Character />
      </Canvas>
    </div>
  );
};

export default CharacterWrapper;
