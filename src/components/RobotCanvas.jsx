import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export default function RobotCanvas({ height = 500, cameraZ = 3.5, section = 'hero' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / height, 0.1, 100);
    camera.position.z = cameraZ;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // transparent background!
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Group for the entire robot
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);

    // Materials
    const darkMetal = new THREE.MeshStandardMaterial({
      color: 0x1a1a2e,
      roughness: 0.2,
      metalness: 0.9,
    });
    const emissiveCyan = new THREE.MeshStandardMaterial({
      color: 0x000000,
      emissive: 0x00F5FF,
      emissiveIntensity: 2.0,
    });
    const emissiveCyanDim = new THREE.MeshStandardMaterial({
      color: 0x000000,
      emissive: 0x00F5FF,
      emissiveIntensity: 0.3,
    });
    const violetMetal = new THREE.MeshStandardMaterial({
      color: 0x6B21A8,
      emissive: 0x9B59FF,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.9,
    });

    // Geometries
    const headGeom = new RoundedBoxGeometry(0.8, 0.8, 0.7, 4, 0.15);
    const headMesh = new THREE.Mesh(headGeom, darkMetal);
    headMesh.position.y = 1.1;
    robotGroup.add(headMesh);

    // Eyes
    const eyeGeom = new THREE.SphereGeometry(0.08);
    const eyeLeft = new THREE.Mesh(eyeGeom, emissiveCyan);
    eyeLeft.position.set(-0.2, 0.1, 0.35);
    headMesh.add(eyeLeft);
    const eyeRight = new THREE.Mesh(eyeGeom, emissiveCyan);
    eyeRight.position.set(0.2, 0.1, 0.35);
    headMesh.add(eyeRight);

    // Eye Lights
    const leftEyeLight = new THREE.PointLight(0x00F5FF, 1.0, 1.0);
    eyeLeft.add(leftEyeLight);
    const rightEyeLight = new THREE.PointLight(0x00F5FF, 1.0, 1.0);
    eyeRight.add(rightEyeLight);

    // Antenna
    const antennaStem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.4), darkMetal);
    antennaStem.position.set(0, 0.6, 0);
    headMesh.add(antennaStem);
    const antennaTip = new THREE.Mesh(new THREE.SphereGeometry(0.06), new THREE.MeshStandardMaterial({
      color: 0x000000,
      emissive: 0x00F5FF,
      emissiveIntensity: 0.8,
    }));
    antennaTip.position.set(0, 0.2, 0);
    antennaStem.add(antennaTip);

    // Neck
    const neckGeom = new THREE.TorusGeometry(0.15, 0.04, 8, 16);
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(neckGeom, darkMetal);
      ring.position.y = 0.6 - i * 0.1;
      ring.rotation.x = Math.PI / 2;
      robotGroup.add(ring);
    }

    // Torso: RoundedBoxGeometry(1.1, 1.3, 0.8, 4, 0.1)
    const torsoGeom = new RoundedBoxGeometry(1.1, 1.3, 0.8, 4, 0.1);
    const torso = new THREE.Mesh(torsoGeom, darkMetal);
    torso.position.y = -0.2;
    robotGroup.add(torso);

    // Chest Panel
    const chestGeom = new THREE.BoxGeometry(0.4, 0.28, 0.05);
    const chestMat = new THREE.MeshStandardMaterial({
      color: 0x000000, emissive: 0x00F5FF, emissiveIntensity: 0.8
    });
    const chestPanel = new THREE.Mesh(chestGeom, chestMat);
    chestPanel.position.set(0, 0.3, 0.42);
    
    // Add 3 horizontal bars to chest panel
    for(let i=0; i<3; i++) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.02), new THREE.MeshStandardMaterial({color: 0x000000, emissive: 0x000000}));
      bar.position.set(0, 0.08 - i*0.08, 0.03);
      chestPanel.add(bar);
    }
    torso.add(chestPanel);

    // Shoulders
    const shoulderGeom = new THREE.SphereGeometry(0.28);
    
    // Left Arm
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.7, 0.3, 0);
    torso.add(leftArmGroup);

    const leftShoulder = new THREE.Mesh(shoulderGeom, violetMetal);
    leftArmGroup.add(leftShoulder);

    const leftUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5), darkMetal);
    leftUpperArm.position.y = -0.3;
    leftArmGroup.add(leftUpperArm);

    const leftLowerArm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.45), darkMetal);
    leftLowerArm.position.y = -0.7;
    leftArmGroup.add(leftLowerArm);

    const leftHand = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.15), emissiveCyanDim);
    leftHand.position.y = -0.95;
    leftArmGroup.add(leftHand);

    // Right Arm
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.7, 0.3, 0);
    torso.add(rightArmGroup);

    const rightShoulder = new THREE.Mesh(shoulderGeom, violetMetal);
    rightArmGroup.add(rightShoulder);

    const rightUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5), darkMetal);
    rightUpperArm.position.y = -0.3;
    rightArmGroup.add(rightUpperArm);

    const rightLowerArm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.45), darkMetal);
    rightLowerArm.position.y = -0.7;
    rightArmGroup.add(rightLowerArm);

    const rightHand = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.15), emissiveCyanDim);
    rightHand.position.y = -0.95;
    rightArmGroup.add(rightHand);

    // Legs
    const legGeom = new THREE.CylinderGeometry(0.12, 0.12, 0.8);
    const footGeom = new THREE.BoxGeometry(0.22, 0.12, 0.3);

    const leftLegGroup = new THREE.Group();
    leftLegGroup.position.set(-0.3, -0.65, 0);
    torso.add(leftLegGroup);
    const leftLeg = new THREE.Mesh(legGeom, darkMetal);
    leftLeg.position.y = -0.4;
    leftLegGroup.add(leftLeg);
    const leftFoot = new THREE.Mesh(footGeom, emissiveCyanDim);
    leftFoot.position.set(0, -0.85, 0.05);
    leftLegGroup.add(leftFoot);

    const rightLegGroup = new THREE.Group();
    rightLegGroup.position.set(0.3, -0.65, 0);
    torso.add(rightLegGroup);
    const rightLeg = new THREE.Mesh(legGeom, darkMetal);
    rightLeg.position.y = -0.4;
    rightLegGroup.add(rightLeg);
    const rightFoot = new THREE.Mesh(footGeom, emissiveCyanDim);
    rightFoot.position.set(0, -0.85, 0.05);
    rightLegGroup.add(rightFoot);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0a0a1a, 0.6);
    scene.add(ambientLight);
    
    const cyanLight = new THREE.PointLight(0x00F5FF, 2, 5);
    cyanLight.position.set(-2, 1, 2);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0x9B59FF, 1.5, 5);
    violetLight.position.set(2, 1, 2);
    scene.add(violetLight);

    const spotLight = new THREE.SpotLight(0xffffff, 0.8);
    spotLight.position.set(0, 5, 2);
    scene.add(spotLight);

    let currentTargetX = 0;
    let currentTargetY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      targetY = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const t = clock.getElapsedTime();
      
      // Cursor tracking
      currentTargetX = THREE.MathUtils.lerp(currentTargetX, targetX, 0.05);
      currentTargetY = THREE.MathUtils.lerp(currentTargetY, targetY, 0.05);
      
      headMesh.rotation.y = currentTargetX;
      headMesh.rotation.x = -currentTargetY;
      
      eyeLeft.rotation.y = currentTargetX * 1.5;
      eyeRight.rotation.y = currentTargetX * 1.5;

      // Idle animations
      robotGroup.position.y = Math.sin(t * 0.8) * 0.06;
      torso.scale.y = 1 + Math.sin(t * 1.2) * 0.012;
      antennaTip.material.emissiveIntensity = 0.8 + Math.sin(t * 2.5) * 0.6;
      
      leftArmGroup.rotation.z = -0.3 + Math.sin(t * 0.9) * 0.05;
      rightArmGroup.rotation.z = 0.3 + Math.sin(t * 0.9 + Math.PI) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
      renderer.setSize(w, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      // Dispose geometry and materials
      [headGeom, eyeGeom, neckGeom, chestGeom, shoulderGeom, antennaStem.geometry, antennaTip.geometry, torsoGeom, leftUpperArm.geometry, leftLowerArm.geometry, leftHand.geometry, legGeom, footGeom].forEach(g => g.dispose());
      [darkMetal, emissiveCyan, emissiveCyanDim, violetMetal, chestMat, antennaTip.material].forEach(m => m.dispose());
    };
  }, [height, cameraZ, section]);

  return (
    <div 
      ref={containerRef} 
      style={{ width: '100%', height: `${height}px`, overflow: 'hidden', clipPath: 'inset(0 0 0 0)', position: 'relative' }} 
      className="robot-canvas-container"
    />
  );
}
