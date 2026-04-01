import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, ContactShadows, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Eye = ({ position }) => (
  <group position={position}>
    <mesh>
      <sphereGeometry args={[0.27, 64, 64]} />
      <meshStandardMaterial color="#ffffff" roughness={0.1} emissive="#ffffff" emissiveIntensity={0.2} />
      <mesh position={[0, 0, 0.24]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#000" />
      </mesh>
    </mesh>
  </group>
);

const Character = () => {
    const group = useRef();
    const bodyRef = useRef();

    useFrame((state) => {
        if (!group.current || !bodyRef.current) return;
        const t = state.clock.getElapsedTime();
        // Floating Sine Bobbing
        group.current.position.y = -2.4 + Math.sin(t * 1.5) * 0.35;
        // Breathing Physics (chest swell)
        const b = 1 + Math.sin(t * 2.2) * 0.04;
        bodyRef.current.scale.set(b, 1, b);
        // Interactivity Head Tracking
        const mx = state.mouse.x * 0.45;
        const my = state.mouse.y * 0.15;
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mx, 0.08);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -my * 0.5, 0.08);
    });

  return (
    <group ref={group} scale={1.8} position={[0, -2.4, 0]}>
      {/* Knit Sweater Base (Bust) */}
      <mesh ref={bodyRef} position={[0, 0.4, 0]}>
        <capsuleGeometry args={[0.73, 1.45, 32, 64]} />
        <meshStandardMaterial color="#1a1a22" roughness={1} />
        <mesh position={[0, 0.72, 0]} rotation={[Math.PI/2, 0, 0]}>
           <torusGeometry args={[0.42, 0.06, 16, 64]} />
           <meshStandardMaterial color="#111" />
        </mesh>
      </mesh>

      {/* CGI Protagonist Head (Center) */}
      <group position={[0, 1.85, 0.1]}>
        {/* Soft Skin Surface */}
        <mesh>
           <sphereGeometry args={[0.88, 64, 64]} />
           <meshStandardMaterial color="#ffceb2" roughness={0.4} emissive="#ffceb2" emissiveIntensity={0.12} />
        </mesh>
        {/* Professional CGI Smile with Dental Mesh */}
        <group position={[0, -0.32, 0.83]}>
           <mesh position={[0, 0.07, 0.02]}>
              <RoundedBox args={[0.48, 0.12, 0.04]} radius={0.035}>
                 <meshStandardMaterial color="#f8f8f8" emissive="#ffffff" emissiveIntensity={0.65} />
              </RoundedBox>
           </mesh>
           {/* Lips Upper/Lower */}
           <mesh rotation={[Math.PI, 0, 0]} position={[0, 0.17, 0.04]}>
              <torusGeometry args={[0.26, 0.025, 16, 64, Math.PI]} />
              <meshStandardMaterial color="#e8a89b" roughness={0.6} />
           </mesh>
           <mesh rotation={[0, 0, Math.PI]} position={[0, -0.04, 0.04]}>
              <torusGeometry args={[0.29, 0.035, 16, 64, Math.PI]} />
              <meshStandardMaterial color="#e8a89b" roughness={0.6} />
           </mesh>
        </group>

        {/* Photorealistic Eye Placement */}
        <Eye position={[0.35, 0.3, 0.73]} />
        <Eye position={[-0.35, 0.3, 0.73]} />

        {/* Defined Nose Bridge */}
        <mesh position={[0, 0, 0.88]} scale={[0.8, 1.35, 0.8]}>
           <sphereGeometry args={[0.12, 32, 32]} />
           <meshStandardMaterial color="#f2b4a1" />
        </mesh>

        {/* Voluminous Swept-Up 3D Hair System (Stylized CGI) */}
        <group position={[0, 0.78, 0]}>
           <RoundedBox args={[1.5, 0.95, 1.35]} radius={0.45} position={[0, 0.12, -0.1]}>
              <meshStandardMaterial color="#31221b" roughness={0.8} />
           </RoundedBox>
           {/* Detailed Sculpted Brown Hair Strands */}
           {[-0.45, -0.22, 0, 0.22, 0.45].map((x, i) => (
             <mesh key={i} position={[x, 0.45 + Math.abs(x)*0.35, 0.4 - Math.abs(x)*0.3]} rotation={[0.8, x*0.4, 0]} scale={[1.35, 2.22, 1.35]}>
               <capsuleGeometry args={[0.18, 0.48, 16, 32]} />
               <meshStandardMaterial color="#36221b" roughness={0.45} metalness={0.15} />
             </mesh>
           ))}
        </group>
      </group>

      <ContactShadows position={[0, 0, 0]} opacity={0.65} scale={12} blur={3.2} far={6} />
    </group>
  );
};

const CharacterWrapper = () => (
  <div className="character-canvas" style={{ width: '100%', height: '100%', position: 'absolute', pointerEvents: 'none' }}>
    <Canvas 
      gl={{ alpha: true, antialias: true, stencil: false, depth: true, powerPreference: "high-performance" }} 
      dpr={[1, 1.5]} 
      camera={{ position: [0, 0, 8.5], fov: 36 }}
    >
      <ambientLight intensity={4.5} /> {/* SUPREME STUDIO LIGHTING RIG for CGI Clarity */}
      <spotLight position={[5, 10, 10]} intensity={18} angle={0.3} penumbra={1} color="#ffffff" />
      <pointLight position={[-12, 5, 5]} color="#7C3AED" intensity={35} /> {/* Extreme Violet Rim Light */}
      <pointLight position={[12, 5, 5]} color="#7C3AED" intensity={22} />
      <pointLight position={[0, -5, 8]} color="#ffceb2" intensity={10} /> {/* Warm Frontal Fill */}
      <Character />
    </Canvas>
  </div>
);

export default CharacterWrapper;
