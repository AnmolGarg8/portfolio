import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, ContactShadows, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Eye = ({ position }) => (
  <group position={position}>
    <mesh>
      <sphereGeometry args={[0.25, 32, 32]} />
      <meshStandardMaterial color="white" roughness={0.1} />
      <mesh position={[0, 0, 0.22]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#050505" />
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
        // Stable Bobbing
        group.current.position.y = -2.4 + Math.sin(t * 1.5) * 0.35;
        // Breathing
        const b = 1 + Math.sin(t * 2) * 0.04;
        bodyRef.current.scale.set(b, 1, b);
        // Mouse Tracking
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.mouse.x * 0.4, 0.05);
    });

  return (
    <group ref={group} scale={1.85} position={[0, -2.4, 0]}>
      {/* Knit Sweater Body */}
      <mesh ref={bodyRef} position={[0, 0.4, 0]}>
        <capsuleGeometry args={[0.72, 1.4, 8, 32]} />
        <meshStandardMaterial color="#1a1a1f" roughness={1} />
        <mesh position={[0, 0.72, 0]} rotation={[Math.PI/2, 0, 0]}>
           <torusGeometry args={[0.42, 0.05, 8, 32]} />
           <meshStandardMaterial color="#000" />
        </mesh>
      </mesh>

      {/* CGI Stylized Head */}
      <group position={[0, 1.8, 0.1]}>
        <mesh>
           <sphereGeometry args={[0.88, 64, 64]} />
           <meshStandardMaterial color="#ffceb4" roughness={0.3} emissive="#ffceb4" emissiveIntensity={0.08} />
        </mesh>
        <mesh position={[0, -0.4, 0.2]} scale={[1, 0.8, 1.25]}>
           <sphereGeometry args={[0.45, 32, 32]} />
           <meshStandardMaterial color="#ffceb4" />
        </mesh>

        <Eye position={[0.35, 0.28, 0.7]} />
        <Eye position={[-0.35, 0.28, 0.7]} />

        {/* Smile showing teeth */}
        <group position={[0, -0.3, 0.82]}>
           <mesh position={[0, 0.06, 0]}>
              <RoundedBox args={[0.45, 0.1, 0.02]} radius={0.03}>
                 <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.6} />
              </RoundedBox>
           </mesh>
           {/* Lips */}
           <mesh rotation={[Math.PI, 0, 0]} position={[0, 0.16, 0.03]}>
              <torusGeometry args={[0.25, 0.02, 12, 32, Math.PI]} />
              <meshStandardMaterial color="#e8a89b" />
           </mesh>
        </group>

        {/* Voluminous Brown Hair */}
        <group position={[0, 0.75, 0]}>
           <RoundedBox args={[1.5, 0.9, 1.4]} radius={0.4} position={[0, 0.1, -0.1]}>
              <meshStandardMaterial color="#31221b" />
           </RoundedBox>
           {/* Detailed 3D Strands */}
           {[-0.45, -0.2, 0, 0.2, 0.45].map((x, i) => (
             <mesh key={i} position={[x, 0.5 + Math.abs(x)*0.3, 0.3 - Math.abs(x)*0.2]} rotation={[0.85, x*0.4, 0]} scale={[1.3, 1.9, 1.3]}>
               <capsuleGeometry args={[0.18, 0.4, 8, 12]} />
               <meshStandardMaterial color="#31221b" />
             </mesh>
           ))}
        </group>
      </group>

      <ContactShadows position={[0, 0, 0]} opacity={0.6} scale={10} blur={2.5} far={4} />
    </group>
  );
};

const CharacterWrapper = () => (
  <div className="character-canvas" style={{ width: '100%', height: '100%', position: 'absolute', pointerEvents: 'none' }}>
    <Canvas 
      gl={{ alpha: true, antialias: true, stencil: false, depth: true, powerPreference: "high-performance" }} 
      dpr={[1, 1.5]} 
      camera={{ position: [0, 0, 10], fov: 35 }}
    >
      <ambientLight intensity={3.5} /> {/* SUPREME BRIGHTNESS */}
      <spotLight position={[10, 10, 10]} intensity={12} />
      <pointLight position={[-10, 5, 5]} color="#7C3AED" intensity={20} /> {/* Ultra Rim */}
      <pointLight position={[10, 5, 5]} color="#7C3AED" intensity={15} />
      <Character />
    </Canvas>
  </div>
);

export default CharacterWrapper;
