import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, RoundedBox, PerspectiveCamera, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Eye = ({ position }) => {
  const eyeRef = useRef();
  const pupilRef = useRef();

  useFrame((state) => {
    if (!eyeRef.current || !pupilRef.current) return;
    const x = (state.mouse.x * state.viewport.width) / 2;
    const y = (state.mouse.y * state.viewport.height) / 2;
    eyeRef.current.lookAt(new THREE.Vector3(x, y, 10));
    pupilRef.current.position.x = THREE.MathUtils.lerp(pupilRef.current.position.x, state.mouse.x * 0.1, 0.1);
    pupilRef.current.position.y = THREE.MathUtils.lerp(pupilRef.current.position.y, state.mouse.y * 0.1, 0.1);
  });

  return (
    <group position={position}>
      <mesh ref={eyeRef}>
        <sphereGeometry args={[0.26, 32, 32]} />
        <meshStandardMaterial color="white" roughness={0.1} />
        {/* Intense catchlight */}
        <mesh position={[0.1, 0.1, 0.22]}>
           <sphereGeometry args={[0.06, 16, 16]} />
           <meshBasicMaterial color="white" />
        </mesh>
        <mesh ref={pupilRef} position={[0, 0, 0.23]}>
          <sphereGeometry args={[0.13, 16, 16]} />
          <meshStandardMaterial color="#050505" />
        </mesh>
      </mesh>
    </group>
  );
};

const HairStrand = ({ position, rotation, scale = [1, 1, 1] }) => (
  <mesh position={position} rotation={rotation} scale={scale}>
    <capsuleGeometry args={[0.18, 0.48, 12, 16]} />
    <meshStandardMaterial color="#31221b" roughness={0.4} metalness={0.2} />
  </mesh>
);

const Character = () => {
  const group = useRef();
  const bodyRef = useRef();

  useFrame((state) => {
    if (!group.current || !bodyRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // AMPLIFIED bobbing for better visibility
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -2.4 + Math.sin(t * 1.5) * 0.35, 0.05);
    
    // AMPLIFIED breathing
    const breath = 1 + Math.sin(t * 2) * 0.04;
    bodyRef.current.scale.set(breath, 1, breath);

    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.mouse.x * 0.35, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.mouse.y * 0.1, 0.05);
  });

  return (
    <group ref={group} scale={1.9} position={[0, -2.4, 0]}>
      {/* Dark Charcoal Sweater */}
      <group position={[0, 0.4, 0]} ref={bodyRef}>
        <mesh>
          <capsuleGeometry args={[0.75, 1.4, 16, 32]} />
          <meshStandardMaterial color="#1a1a1f" roughness={1} />
        </mesh>
        <mesh position={[0, 0.72, 0]} rotation={[Math.PI / 2, 0, 0]}>
           <torusGeometry args={[0.42, 0.05, 16, 64]} />
           <meshStandardMaterial color="#111" />
        </mesh>
      </group>

      {/* CGI Head */}
      <group position={[0, 1.8, 0.1]}>
        {/* Skin with subtle emissive sub-surface fake */}
        <mesh>
           <sphereGeometry args={[0.88, 64, 64]} />
           <meshStandardMaterial color="#ffceb4" roughness={0.3} emissive="#ffceb4" emissiveIntensity={0.05} />
        </mesh>
        {/* Strong Jaw */}
        <mesh position={[0, -0.4, 0.2]} scale={[1, 0.8, 1.2]}>
           <sphereGeometry args={[0.45, 32, 32]} />
           <meshStandardMaterial color="#ffceb4" roughness={0.4} />
        </mesh>

        {/* Teeth Smile */}
        <group position={[0, -0.3, 0.82]}>
           <mesh position={[0, 0.08, 0]}>
              <RoundedBox args={[0.45, 0.12, 0.02]} radius={0.03}>
                 <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.3} />
              </RoundedBox>
           </mesh>
           {/* Lips */}
           <mesh rotation={[Math.PI, 0, 0]} position={[0, 0.16, 0.03]}>
              <torusGeometry args={[0.25, 0.025, 16, 32, Math.PI]} />
              <meshStandardMaterial color="#e8a89b" />
           </mesh>
           <mesh rotation={[0, 0, Math.PI]} position={[0, -0.04, 0.03]}>
              <torusGeometry args={[0.27, 0.03, 16, 32, Math.PI]} />
              <meshStandardMaterial color="#e8a89b" />
           </mesh>
        </group>

        {/* Nose */}
        <mesh position={[0, 0, 0.88]} scale={[0.8, 1.3, 0.8]}>
           <sphereGeometry args={[0.1, 16, 16]} />
           <meshStandardMaterial color="#f2b4a1" />
        </mesh>

        <Eye position={[0.35, 0.28, 0.7]} />
        <Eye position={[-0.35, 0.28, 0.7]} />

        {/* Voluminous Hair */}
        <group position={[0, 0.7, 0.1]}>
           {[-0.4, -0.2, 0, 0.2, 0.4].map((x, i) => (
             <HairStrand 
               key={i} 
               position={[x, 0.5 + Math.abs(x)*0.3, 0.3 - Math.abs(x)*0.2]} 
               rotation={[0.85, x*0.4, 0]} 
               scale={[1.3, 1.9, 1.3]} 
             />
           ))}
           <RoundedBox args={[1.5, 0.85, 1.3]} radius={0.4} position={[0, 0.1, -0.1]}>
              <meshStandardMaterial color="#31221b" />
           </RoundedBox>
        </group>
      </group>

      <Sparkles count={30} scale={6} size={8} speed={0.4} color="#A78BFA" opacity={0.8} />
      <ContactShadows position={[0, 0, 0]} opacity={0.6} scale={10} blur={2.5} far={4} />
    </group>
  );
};

const CharacterWrapper = () => (
  <div className="character-canvas" style={{ width: '100%', height: '100%', position: 'absolute', pointerEvents: 'none' }}>
    <Canvas 
      gl={{ alpha: true, antialias: true, stencil: false, depth: true }} 
      dpr={[1, 1.5]} // Capped for stability
      shadows
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
      <ambientLight intensity={2.5} /> {/* MUCH STRONGER LIGHTING */}
      <spotLight position={[5, 10, 10]} angle={0.3} penumbra={1} intensity={8} color="#fff" />
      <pointLight position={[-10, 5, 5]} intensity={15} color="#7C3AED" /> {/* Powerful Violet Rim */}
      <pointLight position={[10, 5, 5]} intensity={10} color="#7C3AED" />
      <pointLight position={[0, 5, -10]} intensity={10} color="#7C3AED" opacity={0.5} />
      <Character />
    </Canvas>
  </div>
);

export default CharacterWrapper;
