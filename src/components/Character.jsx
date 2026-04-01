import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, ContactShadows, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Eye = ({ position }) => (
  <group position={position}>
    <mesh>
      <sphereGeometry args={[0.26, 32, 32]} />
      <meshStandardMaterial color="white" roughness={0.1} emissive="white" emissiveIntensity={0.2} />
      <mesh position={[0, 0, 0.23]}>
        <sphereGeometry args={[0.13, 16, 16]} />
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
        // Dynamic Idle Bob (floating up/down)
        group.current.position.y = -2.4 + Math.sin(t * 1.5) * 0.35;
        // Breathing physics (chest expansion)
        const b = 1 + Math.sin(t * 2.2) * 0.04;
        bodyRef.current.scale.set(b, 1, b);
        // Interactivity (Head tracking mouse)
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.mouse.x * 0.45, 0.05);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.mouse.y * 0.1, 0.05);
    });

  return (
    <group ref={group} scale={1.85} position={[0, -2.4, 0]}>
      {/* Knit Sweater Body (Chest Crop) */}
      <mesh ref={bodyRef} position={[0, 0.4, 0]}>
        <capsuleGeometry args={[0.72, 1.4, 16, 32]} />
        <meshStandardMaterial color="#1a1a22" roughness={1} />
        <mesh position={[0, 0.72, 0]} rotation={[Math.PI/2, 0, 0]}>
           <torusGeometry args={[0.42, 0.06, 16, 64]} />
           <meshStandardMaterial color="#111" />
        </mesh>
      </mesh>

      {/* CGI Protagonist Head */}
      <group position={[0, 1.8, 0.1]}>
        <mesh>
           <sphereGeometry args={[0.88, 64, 64]} />
           <meshStandardMaterial color="#ffceb4" roughness={0.3} emissive="#ffceb4" emissiveIntensity={0.12} />
        </mesh>
        {/* Strong Professional Jawline */}
        <mesh position={[0, -0.4, 0.2]} scale={[1, 0.82, 1.3]}>
           <sphereGeometry args={[0.45, 32, 32]} />
           <meshStandardMaterial color="#ffceb4" />
        </mesh>

        <Eye position={[0.35, 0.28, 0.75]} />
        <Eye position={[-0.35, 0.28, 0.75]} />

        {/* Confident CGI Smile showing teeth */}
        <group position={[0, -0.3, 0.85]}>
           <mesh position={[0, 0.06, 0.015]}>
              <RoundedBox args={[0.48, 0.12, 0.03]} radius={0.03}>
                 <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.6} />
              </RoundedBox>
           </mesh>
           {/* Lips Upper/Lower */}
           <mesh rotation={[Math.PI, 0, 0]} position={[0, 0.16, 0.04]}>
              <torusGeometry args={[0.26, 0.02, 16, 32, Math.PI]} />
              <meshStandardMaterial color="#e8a89b" />
           </mesh>
           <mesh rotation={[0, 0, Math.PI]} position={[0, -0.04, 0.04]}>
              <torusGeometry args={[0.28, 0.03, 16, 32, Math.PI]} />
              <meshStandardMaterial color="#e8a89b" />
           </mesh>
        </group>

        {/* Defined Nose Shape */}
        <mesh position={[0, 0, 0.88]} scale={[0.8, 1.4, 0.8]}>
           <sphereGeometry args={[0.11, 24, 24]} />
           <meshStandardMaterial color="#f2b4a1" />
        </mesh>

        {/* Voluminous Swept-Up 3D Hair System */}
        <group position={[0, 0.75, 0]}>
           <RoundedBox args={[1.5, 0.95, 1.4]} radius={0.4} position={[0, 0.1, -0.1]}>
              <meshStandardMaterial color="#31221b" />
           </RoundedBox>
           {/* Individual Sculpted Strands (for CGI depth and shine) */}
           {[-0.45, -0.2, 0, 0.2, 0.45].map((x, i) => (
             <mesh key={i} position={[x, 0.5 + Math.abs(x)*0.3, 0.35 - Math.abs(x)*0.2]} rotation={[0.85, x*0.4, 0]} scale={[1.3, 2.1, 1.3]}>
               <capsuleGeometry args={[0.18, 0.45, 12, 24]} />
               <meshStandardMaterial color="#36221b" roughness={0.4} metalness={0.2} emissive="#452a1e" emissiveIntensity={0.1} />
             </mesh>
           ))}
        </group>
      </group>

      <ContactShadows position={[0, 0, 0]} opacity={0.65} scale={12} blur={3.0} far={5} />
    </group>
  );
};

const CharacterWrapper = () => (
  <div className="character-canvas" style={{ width: '100%', height: '100%', position: 'absolute', pointerEvents: 'none' }}>
    <Canvas 
      gl={{ alpha: true, antialias: true, stencil: false, depth: true, powerPreference: "high-performance" }} 
      dpr={[1, 1.25]} // Conservative for stability
      camera={{ position: [0, 0, 9], fov: 38 }}
    >
      <ambientLight intensity={4.5} /> {/* SUPREME BRIGHTNESS RIG */}
      <spotLight position={[5, 10, 10]} intensity={12} angle={0.3} penumbra={1} color="#ffffff" shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-10, 5, 5]} color="#7C3AED" intensity={25} /> {/* Intense Violet Rim */}
      <pointLight position={[10, 5, 5]} color="#7C3AED" intensity={18} />
      <Character />
    </Canvas>
  </div>
);

export default CharacterWrapper;
