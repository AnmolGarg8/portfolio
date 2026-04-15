import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";

const Scene = () => {
  const canvasDiv = useRef(null);
  const hoverDivRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());

  const [character, setChar] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    if (canvasDiv.current) {
      let rect = canvasDiv.current.getBoundingClientRect();
      let container = { width: rect.width, height: rect.height };
      const aspect = container.width / container.height;
      const scene = new THREE.Scene(); // Create scene locally inside useEffect

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      canvasDiv.current.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      camera.position.z = 10;
      camera.position.set(0, 13.1, 24.7);
      camera.zoom = 1.0;
      camera.updateProjectionMatrix();

      let headBone = null;
      let screenLight = null;
      let mixer;

      const clock = new THREE.Clock();

      const light = setLighting(scene);
      let progress = { loaded: () => Promise.resolve() };
      
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      loadCharacter().then((gltf) => {
        if (gltf && isMounted) {
          const animations = setAnimations(gltf);
          hoverDivRef.current && animations.hover(gltf, hoverDivRef.current);
          mixer = animations.mixer;
          let character = gltf.scene;
          setChar(character);
          scene.add(character);
          
          // Reverting to spine006 as it is the most reliable head-base bone in this model
          headBone = character.getObjectByName("spine006") || 
                     character.getObjectByName("Neck") || 
                     character.getObjectByName("Head") || 
                     null;
          
          screenLight = character.getObjectByName("screenlight") || null;
          progress.loaded().then(() => {
            setTimeout(() => {
              if (isMounted) {
                light.turnOnLights();
                animations.startIntro();
              }
            }, 2500);
          });
          const resizeListener = () => handleResize(renderer, camera, canvasDiv, character);
          window.addEventListener("resize", resizeListener);
        }
      });

      let mouse = { x: 0, y: 0 },
        interpolation = { x: 0.15, y: 0.25 };

      const onMouseMoveGlobal = (event) => {
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };
      
      let debounce;
      const onTouchStart = (event) => {
        const element = event.target;
        debounce = setTimeout(() => {
          element?.addEventListener("touchmove", (e) =>
            handleTouchMove(e, (x, y) => (mouse = { x, y }))
          );
        }, 200);
      };

      const onTouchEndGlobal = () => {
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      document.addEventListener("mousemove", onMouseMoveGlobal);
      
      const landingDiv = document.getElementById("hero");
      if (landingDiv) {
        landingDiv.addEventListener("touchstart", onTouchStart);
        landingDiv.addEventListener("touchend", onTouchEndGlobal);
      }
      
      const animate = () => {
        if (!isMounted) return;
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        if (mixer) {
          mixer.update(delta);
        }
        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );
          light.setPointLight(screenLight);
        }
        renderer.render(scene, camera);
      };
      animate();
      
      return () => {
        isMounted = false;
        clearTimeout(debounce);
        scene.clear();
        renderer.dispose();
        document.removeEventListener("mousemove", onMouseMoveGlobal);
        if (landingDiv) {
          landingDiv.removeEventListener("touchstart", onTouchStart);
          landingDiv.removeEventListener("touchend", onTouchEndGlobal);
        }
        if (canvasDiv.current && renderer.domElement) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
      };
    }
  }, []);


  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
