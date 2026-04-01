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
    eyeRef.current.lookAt(new THREE.Vector3(x, y, 10)); // Fixed distance for natural rotation
    pupilRef.current.position.x = THREE.MathUtils.lerp(pupilRef.current.position.x, state.mouse.x * 0.1, 0.1);
    pupilRef.current.position.y = THREE.MathUtils.lerp(pupilRef.current.position.y, state.mouse.y * 0.1, 0.1);
  });

  return (
    <group position={position}>
      <mesh ref={eyeRef}>
        <sphereGeometry args={[0.26, 32, 32]} />
        <meshPhysicalMaterial color="white" roughness={0.05} metalness={0} clearcoat={1} clearcoatRoughness={0.1} />
        {/* Reflection catchlight */}
        <mesh position={[0.1, 0.12, 0.22]}>
           <sphereGeometry args={[0.05, 16, 16]} />
           <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh ref={pupilRef} position={[0, 0, 0.23]}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshPhysicalMaterial color="#111" roughness={0.1} />
        </mesh>
      </mesh>
    </group>
  );
};

const HairStrand = ({ position, rotation, scale = [1, 1, 1] }) => (
  <mesh position={position} rotation={rotation} scale={scale}>
    <capsuleGeometry args={[0.18, 0.45, 12, 32]} />
    <meshPhysicalMaterial color="#2d1d14" roughness={0.3} metalness={0.1} clearcoat={0.5} />
  </mesh>
);

const Character = () => {
  const group = useRef();
  const bodyRef = useRef();

  useFrame((state) => {
    if (!group.current || !bodyRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Smooth idle bob (slow up-down loop)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -2.4 + Math.sin(t * 1.8) * 0.22, 0.05);
    
    // Subtle idle breathing (chest rise/fall)
    const breath = 1 + Math.sin(t * 2.2) * 0.025;
    bodyRef.current.scale.set(breath, 1, breath);

    // Mouse tracking for head rotation (3/4 angle naturally)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.mouse.x * 0.3, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.mouse.y * 0.1, 0.05);
  });

  return (
    <group ref={group} scale={1.9} position={[0.2, -2.4, 0]}> {/* Slight 3/4 angle position adjustment */}
      {/* Textured Knit Sweater (Bust) - Dark Charcoal */}
      <group position={[0, 0.4, 0]} ref={bodyRef}>
        <mesh>
          <capsuleGeometry args={[0.74, 1.45, 12, 32]} />
          <meshPhysicalMaterial color="#1a1a1c" roughness={0.9} metalness={0} />
        </mesh>
        {/* Knit detail collar */}
        <mesh position={[0, 0.72, 0]} rotation={[Math.PI / 2, 0, 0]}>
           <torusGeometry args={[0.43, 0.06, 16, 64]} />
           <meshPhysicalMaterial color="#111113" />
        </mesh>
      </group>

      {/* Head & Face Group */}
      <group position={[0, 1.8, 0.1]} rotation={[0, -0.2, 0]}> {/* Natural 3/4 head rotation */}
        {/* Defined Jaw & Head Shape */}
        <mesh position={[0, 0, 0]}>
           <sphereGeometry args={[0.88, 64, 64]} />
           <meshPhysicalMaterial color="#ffceb4" roughness={0.25} clearcoat={0.1} />
        </mesh>
        <mesh position={[0, -0.45, 0.2]} scale={[1.1, 0.75, 1.3]}>
           <sphereGeometry args={[0.45, 32, 32]} />
           <meshPhysicalMaterial color="#ffceb4" />
        </mesh>

        {/* Expressive Natural Eyes */}
        <Eye position={[0.34, 0.25, 0.7]} />
        <Eye position={[-0.34, 0.25, 0.7]} />

        {/* Strong Groomed Eyebrows */}
        <group position={[0, 0.55, 0.78]}>
           <RoundedBox args={[0.34, 0.12, 0.06]} radius={0.06} position={[0.34, 0, 0]} rotation={[0, 0, 0.08]}>
              <meshPhysicalMaterial color="#211a15" />
           </RoundedBox>
           <RoundedBox args={[0.34, 0.12, 0.06]} radius={0.06} position={[-0.34, 0, 0]} rotation={[0, 0, -0.08]}>
              <meshPhysicalMaterial color="#211a15" />
           </RoundedBox>
        </group>

        {/* Warm Smile with Dental Arch */}
        <group position={[0, -0.32, 0.82]}>
           {/* Mouth Cavity */}
           <mesh scale={[1, 0.8, 1]} position={[0, 0.05, -0.05]}>
              <planeGeometry args={[0.55, 0.2]} />
              <meshBasicMaterial color="#331a1a" />
           </mesh>
           {/* Teeth Mesh */}
           <mesh position={[0, 0.06, 0.02]}>
              <RoundedBox args={[0.48, 0.1, 0.03]} radius={0.03}>
                 <meshPhysicalMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.1} roughness={0.1} />
              </RoundedBox>
           </mesh>
           {/* Lips Upper/Lower */}
           <mesh rotation={[Math.PI, 0, 0]} position={[0, 0.15, 0.04]}>
              <torusGeometry args={[0.26, 0.02, 16, 32, Math.PI]} />
              <meshPhysicalMaterial color="#e8a89b" roughness={0.4} />
           </mesh>
           <mesh rotation={[0, 0, Math.PI]} position={[0, -0.03, 0.04]}>
              <torusGeometry args={[0.28, 0.03, 16, 32, Math.PI]} />
              <meshPhysicalMaterial color="#e8a89b" roughness={0.4} />
           </mesh>
        </group>

        {/* Refined Nose */}
        <mesh position={[0, 0, 0.88]} scale={[0.8, 1.4, 0.8]}>
           <sphereGeometry args={[0.11, 24, 24]} />
           <meshPhysicalMaterial color="#f2b4a1" />
        </mesh>

        {/* Voluminous 3D Sculpted Hair (Strands & Texture) */}
        <group position={[0, 0.75, 0.1]}>
           <HairStrand position={[0, 0.45, 0.35]} rotation={[0.8, 0, 0]} scale={[1.4, 2.2, 1.4]} />
           <HairStrand position={[0.25, 0.4, 0.2]} rotation={[0.7, 0.4, 0.2]} scale={[1.2, 2.0, 1.2]} />
           <HairStrand position={[-0.25, 0.4, 0.2]} rotation={[0.7, -0.4, -0.2]} scale={[1.2, 2.0, 1.2]} />
           <HairStrand position={[0.45, 0.2, 0.1]} rotation={[0.4, 0.8, 0.4]} scale={[1.1, 1.6, 1.1]} />
           <HairStrand position={[-0.45, 0.2, 0.1]} rotation={[0.4, -0.8, -0.4]} scale={[1.1, 1.6, 1.1]} />
           
           <RoundedBox args={[1.5, 0.9, 1.4]} radius={0.4} position={[0, 0.1, -0.15]}>
              <meshPhysicalMaterial color="#211a15" roughness={0.6} />
           </RoundedBox>
        </group>
      </group>

      <Sparkles count={30} scale={5} size={7} speed={0.3} opacity={0.6} color="#A78BFA" />
      <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={12} blur={3.5} far={6} />
    </group>
  );
};

const CharacterWrapper = () => (
  <div className="character-canvas" style={{ width: '100%', height: '100%', position: 'absolute', pointerEvents: 'none' }}>
    <Canvas gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
      {/* Studio Lighting Setup */}
      <ambientLight intensity={1.2} />
      <spotLight position={[5, 10, 10]} angle={0.25} penumbra={1} intensity={6} color="#ffffff" /> {/* Main Key */}
      <pointLight position={[-10, 5, -5]} intensity={12} color="#7C3AED" /> {/* Side/Back Purple Rim */}
      <pointLight position={[10, 5, -5]} intensity={12} color="#7C3AED" /> {/* Secondary Rim */}
      <pointLight position={[0, -5, 10]} intensity={2} color="#ffbe98" /> {/* Warm fill */}
      <Character />
    </Canvas>
  </div>
);

export default CharacterWrapper;
