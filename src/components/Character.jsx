import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, RoundedBox, PerspectiveCamera, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Eye = ({ position }) => {
  const eyeRef = useRef();
  const pupilRef = useRef();

  useFrame((state) => {
    if (!eyeRef.current || !pupilRef.current) return;
    const x = (state.mouse.x * state.viewport.width) / 2;
    const y = (state.mouse.y * state.viewport.height) / 2;
    eyeRef.current.lookAt(new THREE.Vector3(x, y, 5));
    pupilRef.current.position.x = THREE.MathUtils.lerp(pupilRef.current.position.x, state.mouse.x * 0.1, 0.1);
    pupilRef.current.position.y = THREE.MathUtils.lerp(pupilRef.current.position.y, state.mouse.y * 0.1, 0.1);
  });

  return (
    <group position={position}>
      <mesh ref={eyeRef}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="white" roughness={0.05} />
        <mesh position={[0.1, 0.1, 0.2]}>
           <sphereGeometry args={[0.04, 16, 16]} />
           <meshStandardMaterial color="white" emissive="white" emissiveIntensity={3} />
        </mesh>
        <mesh ref={pupilRef} position={[0, 0, 0.22]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      </mesh>
    </group>
  );
};

const HairStrand = ({ position, rotation, scale = [1, 1, 1] }) => (
  <mesh position={position} rotation={rotation} scale={scale}>
    <capsuleGeometry args={[0.18, 0.5, 8, 16]} />
    <meshStandardMaterial color="#31221a" roughness={0.4} envMapIntensity={0.5} />
  </mesh>
);

const Character = () => {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.mouse.x * 0.35, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.mouse.y * 0.1, 0.05);
    // Gentle floating
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -2.4 + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.05, 0.05);
  });

  return (
    <group ref={group} scale={1.85} position={[0, -2.4, 0]}>
      {/* Textured Dark Navy Sweater */}
      <group position={[0, 0.4, 0]}>
        <mesh>
          <capsuleGeometry args={[0.72, 1.4, 16, 32]} />
          <meshStandardMaterial color="#0f172a" roughness={1} />
        </mesh>
        {/* Sweater Collar */}
        <mesh position={[0, 0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
           <torusGeometry args={[0.42, 0.05, 16, 64]} />
           <meshStandardMaterial color="#0b111e" />
        </mesh>
      </group>

      {/* Head & Neck */}
      <group position={[0, 1.75, 0.1]}>
        {/* Neck */}
        <mesh position={[0, -0.6, -0.1]}>
           <cylinderGeometry args={[0.25, 0.3, 0.6]} />
           <meshStandardMaterial color="#FFDBAC" />
        </mesh>

        {/* Face Shape (Stylized with strong chin) */}
        <mesh position={[0, 0.1, 0]}>
           <sphereGeometry args={[0.85, 64, 64]} />
           <meshStandardMaterial color="#FFDBAC" roughness={0.4} />
        </mesh>
        {/* Chin refinement */}
        <mesh position={[0, -0.4, 0.2]} scale={[1, 0.8, 1.2]}>
           <sphereGeometry args={[0.4, 32, 32]} />
           <meshStandardMaterial color="#FFDBAC" />
        </mesh>

        {/* Big Smile */}
        <group position={[0, -0.28, 0.8]}>
           {/* Teeth */}
           <mesh position={[0, 0.05, 0]}>
              <RoundedBox args={[0.42, 0.12, 0.02]} radius={0.03} smoothness={4}>
                 <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.2} />
              </RoundedBox>
           </mesh>
           {/* Lips Upper */}
           <mesh rotation={[Math.PI, 0, 0]} position={[0, 0.14, 0.02]}>
              <torusGeometry args={[0.24, 0.02, 16, 32, Math.PI]} />
              <meshStandardMaterial color="#e8988e" />
           </mesh>
           {/* Lips Lower */}
           <mesh rotation={[0, 0, Math.PI]} position={[0, -0.04, 0.02]}>
              <torusGeometry args={[0.26, 0.03, 16, 32, Math.PI]} />
              <meshStandardMaterial color="#e8988e" />
           </mesh>
        </group>

        {/* Nose */}
        <mesh position={[0, 0, 0.85]} scale={[0.8, 1.4, 0.8]}>
           <sphereGeometry args={[0.1, 16, 16]} />
           <meshStandardMaterial color="#e8988e" />
        </mesh>

        {/* Eyes (Larger, expressive) */}
        <Eye position={[0.35, 0.25, 0.68]} />
        <Eye position={[-0.35, 0.25, 0.68]} />

        {/* Thick Brows */}
        <group position={[0, 0.52, 0.75]}>
           <RoundedBox args={[0.32, 0.1, 0.06]} radius={0.05} position={[0.35, 0, 0]} rotation={[0, 0, 0.05]}>
              <meshStandardMaterial color="#31221a" />
           </RoundedBox>
           <RoundedBox args={[0.32, 0.1, 0.06]} radius={0.05} position={[-0.35, 0, 0]} rotation={[0, 0, -0.05]}>
              <meshStandardMaterial color="#31221a" />
           </RoundedBox>
        </group>

        {/* Thick Brushed Up Hair (Lots of strands for Volume) */}
        <group position={[0, 0.7, 0.1]}>
           {/* Front Quiff Strands */}
           {[-0.4, -0.2, 0, 0.2, 0.4].map((x, i) => (
             <HairStrand 
               key={i} 
               position={[x, 0.45 + Math.abs(x)*0.3, 0.3 - Math.abs(x)*0.3]} 
               rotation={[0.8, x*0.5, 0]} 
               scale={[1.2, 1.8, 1.2]} 
             />
           ))}
           {/* Side/Back Volumes */}
           <RoundedBox args={[1.4, 0.8, 1.2]} radius={0.4} position={[0, 0.1, -0.1]}>
              <meshStandardMaterial color="#31221a" />
           </RoundedBox>
           <HairStrand position={[0.6, 0.2, 0]} rotation={[0, 0, -0.5]} scale={[1, 1.4, 1]} />
           <HairStrand position={[-0.6, 0.2, 0]} rotation={[0, 0, 0.5]} scale={[1, 1.4, 1]} />
        </group>
      </group>

      {/* Atmospheric Effects */}
      <Sparkles count={60} scale={6} size={8} speed={0.5} opacity={0.6} color="#A78BFA" />
      <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={12} blur={3} far={5} />
    </group>
  );
};

const CharacterWrapper = () => (
  <div className="character-canvas" style={{ width: '100%', height: '100%', position: 'absolute' }}>
    <Canvas gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
      <ambientLight intensity={1.5} />
      <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} intensity={5} />
      <pointLight position={[-10, 5, 5]} intensity={8} color="#7C3AED" /> {/* Powerful Side Rim */}
      <pointLight position={[10, -5, -5]} intensity={3} color="#00E5FF" />
      <Character />
    </Canvas>
  </div>
);

export default CharacterWrapper;
