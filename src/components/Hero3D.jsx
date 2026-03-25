import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';

const MeshGeometry = () => {
  const meshRef = useRef();
  const wireframeRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.1;
      wireframeRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        {/* Core solid geometry */}
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial 
            color="#FFFFFF" 
            emissive="#5C6BC0"
            emissiveIntensity={0.2}
            roughness={0.2} 
            metalness={0.8} 
          />
        </mesh>
        
        {/* Outer wireframe geometry */}
        <mesh ref={wireframeRef} scale={2.5}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial 
            color="#F4B942" 
            wireframe={true} 
            transparent 
            opacity={0.3} 
          />
        </mesh>
      </Float>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-[50vh] md:h-[600px] flex items-center justify-center pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} color="#5C6BC0" intensity={1} />
        <MeshGeometry />
        <Environment preset="city" />
        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={10} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
