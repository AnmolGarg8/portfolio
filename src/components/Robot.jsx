import { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

export const Robot = ({ scrollY = 0 }) => {
  const group = useRef();
  const headRef = useRef();
  const eyesGroupRef = useRef();
  const torsoRef = useRef();
  const antennaTipRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  const leftLowerArmRef = useRef();
  const rightLowerArmRef = useRef();
  
  const mouse = useRef(new THREE.Vector2(0, 0));
  const targetRotation = useRef(new THREE.Vector2(0, 0));
  const { viewport, size } = useThree();
  const isMobile = size.width < 768;

  // Handle Mouse movement for tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse to -1 to +1
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    // reset when mouse leaves
    const handleMouseLeave = () => {
      mouse.current.x = 0;
      mouse.current.y = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Materials
  const darkMetal = new THREE.MeshStandardMaterial({
    color: '#1a1a2e',
    roughness: 0.2,
    metalness: 0.9,
  });

  const cyanEmissive = new THREE.MeshBasicMaterial({
    color: '#00F5FF',
  });

  const glassVisor = new THREE.MeshStandardMaterial({
    color: '#05050f',
    roughness: 0.1,
    metalness: 0.8,
    transparent: true,
    opacity: 0.6,
  });

  const violetGlow = new THREE.MeshStandardMaterial({
    color: '#9B59FF',
    emissive: '#9B59FF',
    emissiveIntensity: 0.5,
  });

  const clock = new THREE.Clock();

  // Animation Loop
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Mouse Tracking with Lerp (Disable on mobile)
    if (!isMobile) {
      targetRotation.current.x = THREE.MathUtils.lerp(targetRotation.current.x, mouse.current.x * 0.5, 0.05); // Y-axis mapping mostly
      targetRotation.current.y = THREE.MathUtils.lerp(targetRotation.current.y, mouse.current.y * 0.3, 0.05); // X-axis mapping
    } else {
      targetRotation.current.x = 0;
      targetRotation.current.y = 0;
    }

    // Idle sine wave if mouse is ~0 (idle detection approximation)
    let idleX = 0;
    if (Math.abs(mouse.current.x) < 0.1 && Math.abs(mouse.current.y) < 0.1) {
      idleX = Math.sin(time * 0.5) * 0.15;
    }

    if (headRef.current) {
      headRef.current.rotation.y = targetRotation.current.x + idleX;
      headRef.current.rotation.x = -targetRotation.current.y;
    }

    if (eyesGroupRef.current) {
      // Eyes move slightly more for exaggerated looking
      eyesGroupRef.current.position.x = targetRotation.current.x * 0.2;
      eyesGroupRef.current.position.y = targetRotation.current.y * 0.1;
    }

    // 2. Breathing (Torso Scale Y)
    if (torsoRef.current) {
      torsoRef.current.scale.y = 1.0 + Math.sin(time * (Math.PI / 1.5)) * 0.02;
    }

    // 3. Floating (Group Y position)
    if (group.current) {
      // Base float
      let floatY = Math.sin(time * (Math.PI / 2)) * 0.1;

      // Adjust group properties based on scrollY to move through sections!
      // Scroll mapping based on approximate document pixels.
      const currentScroll = window.scrollY;
      const wH = window.innerHeight;

      // Section 1: Hero (0) -> Center, pointing front
      // Section 2: About (~1000px) -> Profile right side
      // Section 3: Services (~2000px) -> Sitting/typing pose
      
      let targetPosX = 0;
      let targetPosY = floatY;
      let targetPosZ = 0;
      let targetRotY = 0;
      
      // Arms typing pose targets
      let lArmX = 0, lArmZ = 0.2;
      let rArmX = 0, rArmZ = -0.2;
      let lLowerArmX = 0;
      let rLowerArmX = 0;

      if (currentScroll < wH * 0.5) {
        // Hero
        targetPosX = 0;
        targetPosZ = 0;
      } else if (currentScroll >= wH * 0.5 && currentScroll < wH * 1.5) {
        // About (Profile view)
        targetPosX = -viewport.width / 4; // Move to left empty space
        targetRotY = Math.PI / 4; // Turn slightly profile
      } else if (currentScroll >= wH * 1.5) {
        // Services (Sitting/Typing)
        targetPosX = 0; 
        targetRotY = 0;
        
        // Typing pose
        lArmX = -1.0; 
        rArmX = -1.0;
        lLowerArmX = -0.5;
        rLowerArmX = -0.5;
      }

      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetPosX, 0.05);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetPosY, 0.1);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.05);

      if (leftArmRef.current) leftArmRef.current.rotation.x = THREE.MathUtils.lerp(leftArmRef.current.rotation.x, lArmX, 0.05);
      if (rightArmRef.current) rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, rArmX, 0.05);
      
      if (leftLowerArmRef.current) leftLowerArmRef.current.rotation.x = THREE.MathUtils.lerp(leftLowerArmRef.current.rotation.x, lLowerArmX, 0.05);
      if (rightLowerArmRef.current) rightLowerArmRef.current.rotation.x = THREE.MathUtils.lerp(rightLowerArmRef.current.rotation.x, rLowerArmX, 0.05);

    }

    // Apply mobile scale
    if (group.current) {
        group.current.scale.setScalar(isMobile ? 0.6 : 1.0);
    }

    // 4. Antenna Pulse
    if (antennaTipRef.current) {
        const pulse = (Math.sin(time * (Math.PI / 0.75)) + 1) / 2; // 0 to 1
        antennaTipRef.current.material.emissiveIntensity = 0.5 + pulse;
        antennaTipRef.current.scale.setScalar(1 + pulse * 0.2);
    }
  });

  return (
    <group ref={group} dispose={null}>
      
      {/* Lights specific to robot to create dramatic rim lighting */}
      <pointLight position={[-3, 2, 2]} color="#00F5FF" intensity={2.5} distance={10} />
      <pointLight position={[3, 2, -2]} color="#9B59FF" intensity={2.5} distance={10} />
      <spotLight position={[0, 5, 2]} color="#ffffff" intensity={1} angle={0.5} penumbra={1} />

      {/* HEAD GROUP */}
      <group ref={headRef} position={[0, 1.8, 0]}>
        {/* Antenna */}
        <mesh position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
          <primitive object={darkMetal} />
        </mesh>
        <mesh ref={antennaTipRef} position={[0, 0.9, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#00F5FF" emissive="#00F5FF" emissiveIntensity={1} />
        </mesh>

        {/* Head Box */}
        <RoundedBox args={[1.2, 1, 1.2]} radius={0.1} smoothness={4}>
          <primitive object={darkMetal} />
        </RoundedBox>

        {/* Visor */}
        <RoundedBox args={[1.0, 0.4, 1.25]} radius={0.05} smoothness={4} position={[0, 0.1, 0.05]}>
          <primitive object={glassVisor} />
        </RoundedBox>

        {/* Eyes Group moving on visor */}
        <group ref={eyesGroupRef} position={[0, 0.1, 0.65]}>
          <mesh position={[-0.25, 0, 0]}>
             <sphereGeometry args={[0.08, 16, 16]} />
             <primitive object={cyanEmissive} />
             <pointLight color="#00F5FF" intensity={1} distance={2} />
          </mesh>
          <mesh position={[0.25, 0, 0]}>
             <sphereGeometry args={[0.08, 16, 16]} />
             <primitive object={cyanEmissive} />
             <pointLight color="#00F5FF" intensity={1} distance={2} />
          </mesh>
        </group>
      </group>

      {/* NECK */}
      <group position={[0, 1.1, 0]}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0, i * 0.1 - 0.1, 0]} rotation={[Math.PI/2, 0, 0]}>
            <torusGeometry args={[0.2, 0.05, 16, 32]} />
            <primitive object={darkMetal} />
          </mesh>
        ))}
        <mesh>
          <cylinderGeometry args={[0.15, 0.15, 0.4, 16]} />
          <primitive object={darkMetal} />
        </mesh>
      </group>

      {/* TORSO */}
      <group ref={torsoRef} position={[0, 0, 0]}>
        <RoundedBox args={[1.6, 2, 1]} radius={0.2} smoothness={4}>
           <primitive object={darkMetal} />
        </RoundedBox>
        {/* Glowing Chest Panel */}
        <mesh position={[0, 0.2, 0.51]}>
          <planeGeometry args={[0.8, 0.6]} />
          <meshStandardMaterial color="#00F5FF" emissive="#00F5FF" emissiveIntensity={0.4} wireframe />
        </mesh>
      </group>

      {/* SHOULDERS & ARMS */}
      {/* Left Arm */}
      <group position={[-1.0, 0.8, 0]}>
        {/* Shoulder Orb */}
        <mesh>
          <sphereGeometry args={[0.3, 32, 32]} />
          <primitive object={violetGlow} />
        </mesh>
        <group ref={leftArmRef} position={[0, -0.1, 0]}>
            {/* Upper Arm */}
            <mesh position={[0, -0.6, 0]}>
              <cylinderGeometry args={[0.15, 0.12, 1.2, 16]} />
              <primitive object={darkMetal} />
            </mesh>
            {/* Elbow Joint */}
            <mesh position={[0, -1.3, 0]}>
              <sphereGeometry args={[0.18, 16, 16]} />
              <primitive object={darkMetal} />
            </mesh>
            {/* Lower Arm Pivot */}
            <group ref={leftLowerArmRef} position={[0, -1.3, 0]}>
               <mesh position={[0, -0.6, 0]}>
                  <cylinderGeometry args={[0.12, 0.1, 1.2, 16]} />
                  <primitive object={darkMetal} />
               </mesh>
               {/* Hand Base */}
               <mesh position={[0, -1.3, 0]}>
                  <boxGeometry args={[0.15, 0.3, 0.2]} />
                  <primitive object={cyanEmissive} />
               </mesh>
            </group>
        </group>
      </group>

      {/* Right Arm */}
      <group position={[1.0, 0.8, 0]}>
        {/* Shoulder Orb */}
        <mesh>
          <sphereGeometry args={[0.3, 32, 32]} />
          <primitive object={violetGlow} />
        </mesh>
        <group ref={rightArmRef} position={[0, -0.1, 0]}>
            {/* Upper Arm */}
            <mesh position={[0, -0.6, 0]}>
              <cylinderGeometry args={[0.15, 0.12, 1.2, 16]} />
              <primitive object={darkMetal} />
            </mesh>
            {/* Elbow Joint */}
            <mesh position={[0, -1.3, 0]}>
              <sphereGeometry args={[0.18, 16, 16]} />
              <primitive object={darkMetal} />
            </mesh>
            {/* Lower Arm Pivot */}
            <group ref={rightLowerArmRef} position={[0, -1.3, 0]}>
               <mesh position={[0, -0.6, 0]}>
                  <cylinderGeometry args={[0.12, 0.1, 1.2, 16]} />
                  <primitive object={darkMetal} />
               </mesh>
               {/* Hand Base */}
               <mesh position={[0, -1.3, 0]}>
                  <boxGeometry args={[0.15, 0.3, 0.2]} />
                  <primitive object={cyanEmissive} />
               </mesh>
            </group>
        </group>
      </group>

    </group>
  );
};
