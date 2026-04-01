import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, ContactShadows, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Eye = ({ position }) => (
  <group position={position}>
    <mesh>
      <sphereGeometry args={[0.26, 64, 64]} />
      <meshStandardMaterial color="#ffffff" roughness={0.1} emissive="#ffffff" emissiveIntensity={0.2} />
      <mesh position={[0, 0, 0.23]}>
        <sphereGeometry args={[0.135, 16, 16]} />
        <meshStandardMaterial color="#010101" />
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
        // Dynamic Idle Floating (Bobbing translateY)
        group.current.position.y = -2.3 + Math.sin(t * 1.6) * 0.38;
        // Natural Breathing physics
        const b = 1 + Math.sin(t * 2.1) * 0.045;
        bodyRef.current.scale.set(b, 1, b);
        // Mouse Tracking (Head/Body Rotation)
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.mouse.x * 0.45, 0.08);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.mouse.y * 0.12, 0.08);
    });

  return (
    <group ref={group} scale={1.85} position={[0, -2.3, 0]}>
      {/* High-Performance Knit Crewneck (Bust) */}
      <mesh ref={bodyRef} position={[0, 0.4, 0]}>
        <capsuleGeometry args={[0.74, 1.45, 32, 64]} />
        <meshStandardMaterial color="#1a1a20" roughness={1} metalness={0.05} />
        <mesh position={[0, 0.72, 0]} rotation={[Math.PI/2, 0, 0]}>
           <torusGeometry args={[0.43, 0.06, 32, 64]} />
           <meshStandardMaterial color="#111" />
        </mesh>
      </mesh>

      {/* CGI Stylized Protagonist Head */}
      <group position={[0, 1.85, 0.1]}>
        {/* Face with Sub-Surface Scattering Fake */}
        <mesh>
           <sphereGeometry args={[0.88, 64, 64]} />
           <meshStandardMaterial color="#ffceb4" roughness={0.35} emissive="#ffceb4" emissiveIntensity={0.15} />
        </mesh>
        {/* Defined Professional Jawline */}
        <mesh position={[0, -0.45, 0.2]} scale={[1.05, 0.8, 1.35]}>
           <sphereGeometry args={[0.45, 32, 32]} />
           <meshStandardMaterial color="#ffceb4" roughness={0.4} />
        </mesh>

        <Eye position={[0.35, 0.28, 0.72]} />
        <Eye position={[-0.35, 0.28, 0.72]} />

        {/* Confident CGI Smile showing teeth */}
        <group position={[0, -0.32, 0.84]}>
           <mesh position={[0, 0.07, 0.02]}>
              <RoundedBox args={[0.48, 0.11, 0.03]} radius={0.03}>
                 <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.7} roughness={0.1} />
              </RoundedBox>
           </mesh>
           {/* Lips Upper/Lower */}
           <mesh rotation={[Math.PI, 0, 0]} position={[0, 0.16, 0.04]}>
              <torusGeometry args={[0.26, 0.02, 16, 32, Math.PI]} />
              <meshStandardMaterial color="#e8a89b" roughness={0.5} />
           </mesh>
           <mesh rotation={[0, 0, Math.PI]} position={[0, -0.04, 0.04]}>
              <torusGeometry args={[0.28, 0.03, 16, 32, Math.PI]} />
              <meshStandardMaterial color="#e8a89b" roughness={0.5} />
           </mesh>
        </group>

        {/* Defined Nose Bridge */}
        <mesh position={[0, 0, 0.88]} scale={[0.8, 1.4, 0.8]}>
           <sphereGeometry args={[0.11, 32, 32]} />
           <meshStandardMaterial color="#f2b4a1" />
        </mesh>

        {/* Voluminous Swept-Up 3D Hair system (brown) */}
        <group position={[0, 0.75, 0]}>
           <RoundedBox args={[1.5, 0.95, 1.4]} radius={0.45} position={[0, 0.12, -0.1]}>
              <meshStandardMaterial color="#31221b" roughness={0.8} />
           </RoundedBox>
           {/* Individual CGI Sculpted Strands of dynamic brown hair */}
           {[-0.45, -0.2, 0, 0.2, 0.45].map((x, i) => (
             <mesh key={i} position={[x, 0.5 + Math.abs(x)*0.3, 0.35 - Math.abs(x)*0.2]} rotation={[0.85, x*0.4, 0]} scale={[1.3, 2.15, 1.3]}>
               <capsuleGeometry args={[0.18, 0.48, 12, 16]} />
               <meshStandardMaterial color="#36221b" roughness={0.4} metalness={0.15} emissive="#2d1d14" emissiveIntensity={0.1} />
             </mesh>
           ))}
        </group>
      </group>

      <ContactShadows position={[0, 0, 0]} opacity={0.65} scale={12} blur={3.2} far={5} />
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
      <ambientLight intensity={4.2} /> {/* DOMINANT LIGHTING FOR STABILITY */}
      <spotLight position={[5, 10, 10]} intensity={15} angle={0.3} penumbra={1} color="#ffffff" />
      <pointLight position={[-10, 5, 5]} color="#7C3AED" intensity={30} /> {/* Ultra-Vivid Rim Purple */}
      <pointLight position={[10, 5, 5]} color="#7C3AED" intensity={20} />
      <pointLight position={[0, -5, 5]} color="#ffceb4" intensity={8} /> {/* Warm fill base */}
      <Character />
    </Canvas>
  </div>
);

export default CharacterWrapper;
