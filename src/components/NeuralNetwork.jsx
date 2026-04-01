import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NetworkGroup = () => {
  const groupRef = useRef();
  const nodesRef = useRef([]);
  const linesRef = useRef();
  
  const nodeCount = 80;
  const connectionDistance = 1.6;

  // Generate random positions for nodes
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < nodeCount; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6
        ],
        speed: Math.random() * 0.01,
        offset: Math.random() * Math.PI * 2,
        isActive: Math.random() > 0.93 // Five active nodes
      });
    }
    return temp;
  }, []);

  // Handle mouse parallax and scroll rotation
  useFrame((state) => {
    const { mouse, clock } = state;
    const time = clock.getElapsedTime();

    // Group movement
    if (groupRef.current) {
      // Periodic rotation
      groupRef.current.rotation.y = time * 0.1 + window.scrollY * 0.002;
      groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1 + mouse.y * 0.2;
      groupRef.current.rotation.z = mouse.x * 0.1;
    }

    // Animate nodes pulsing
    if (nodesRef.current) {
      nodesRef.current.forEach((mesh, i) => {
        if (mesh) {
          const s = nodes[i].isActive ? 1.5 + Math.sin(time * 3 + nodes[i].offset) * 0.3 : 1 + Math.sin(time * 2 + nodes[i].offset) * 0.2;
          mesh.scale.setScalar(s);
        }
      });
    }
  });

  // Calculate lines based on distances
  const linePoints = useMemo(() => {
    const points = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = new THREE.Vector3(...nodes[i].position).distanceTo(new THREE.Vector3(...nodes[j].position));
        if (dist < connectionDistance) {
          points.push(...nodes[i].position, ...nodes[j].position);
        }
      }
    }
    return new Float32Array(points);
  }, [nodes]);

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <mesh
          key={i}
          position={node.position}
          ref={(el) => (nodesRef.current[i] = el)}
        >
          <sphereGeometry args={[node.isActive ? 0.06 : 0.035, 16, 16]} />
          <meshBasicMaterial 
            color={node.isActive ? "#7C3AED" : "#00E5FF"} 
            transparent 
            opacity={0.8}
          />
          {node.isActive && (
            <pointLight 
              color="#7C3AED" 
              intensity={2} 
              distance={1} 
              decay={2}
            />
          )}
        </mesh>
      ))}

      {/* Connections */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePoints.length / 3}
            array={linePoints}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00E5FF" transparent opacity={0.15} />
      </lineSegments>

      {/* Floating Dust */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={300}
            array={new Float32Array(Array.from({ length: 900 }, () => (Math.random() - 0.5) * 12))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#F8FAFC" size={0.015} transparent opacity={0.3} />
      </points>
    </group>
  );
};

const NeuralNetwork = () => {
  return (
    <div className="neural-network-canvas" style={{
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
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0); // Always transparent
        }}
        dpr={[1, 2]}
      >
        <NetworkGroup />
      </Canvas>
    </div>
  );
};

export default NeuralNetwork;
