import { useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ count = 2000 }) => {
  const pointsRef = useRef();

  // Generate random points in a sphere
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 10 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, [count]);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color('#00F5FF');
    const violet = new THREE.Color('#9B59FF');
    for(let i=0; i<count; i++) {
        const mix = Math.random();
        const color = new THREE.Color().lerpColors(cyan, violet, mix);
        col[i*3] = color.r;
        col[i*3+1] = color.g;
        col[i*3+2] = color.b;
    }
    return col;
  }, [count])

  // Animate particles based on mouse and time
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;

    const pointer = state.pointer; 
    pointsRef.current.rotation.y += pointer.x * 0.1;
    pointsRef.current.rotation.x += -pointer.y * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
        />
        <bufferAttribute 
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        sizeAttenuation={true} 
        transparent={true}
        opacity={0.6}
        vertexColors={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const SphereOrbit = () => {
    const sphereRef = useRef();
    const ringRef1 = useRef();
    const ringRef2 = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if(sphereRef.current) {
            sphereRef.current.position.y = Math.sin(time * 0.5) * 0.2;
            sphereRef.current.rotation.x += 0.005;
            sphereRef.current.rotation.y += 0.01;
        }
        if(ringRef1.current) {
            ringRef1.current.rotation.x = time * 0.2;
            ringRef1.current.rotation.y = time * 0.3;
        }
        if(ringRef2.current) {
            ringRef2.current.rotation.x = time * -0.15;
            ringRef2.current.rotation.y = time * -0.25;
        }
    })

    return (
        <group scale={1.2}>
            {/* Core metallic sphere */}
            <mesh ref={sphereRef}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial 
                    color="#0a0a0f" 
                    metalness={0.9} 
                    roughness={0.1}
                    emissive="#0a0a0f"
                />
            </mesh>

            {/* Glowing inner orbit */}
            <mesh ref={ringRef1}>
                <torusGeometry args={[2.2, 0.02, 16, 100]} />
                <meshBasicMaterial color="#00F5FF" transparent opacity={0.6} blending={THREE.AdditiveBlending}/>
            </mesh>
            
            <mesh ref={ringRef2} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                <torusGeometry args={[2.8, 0.015, 16, 100]} />
                <meshBasicMaterial color="#9B59FF" transparent opacity={0.4} blending={THREE.AdditiveBlending}/>
            </mesh>
        </group>
    )
}

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto mix-blend-screen opacity-70">
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }} gl={{ antialias: false, alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00F5FF" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#9B59FF" />
        
        <ParticleField count={2500} />
        
        {/* Render sphere in the right half by pushing it based on aspect ratio in a real app, but for now just group it slightly right */}
        <group position={[2.5, 0, 0]}>
            <SphereOrbit />
        </group>
      </Canvas>
    </div>
  );
};

export default Hero3D;
