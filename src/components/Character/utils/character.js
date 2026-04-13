import * as THREE from "three";
import { DRACOLoader, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (renderer, scene, camera) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        loader.load(
          blobUrl,
          async (gltf) => {
            const character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child) => {
              if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.frustumCulled = true;

                // Skin color update (Face, Hands, Neck, Ears, Feet)
                const skinKeywords = ["skin", "hand", "foot", "neck", "ear", "head", "face", "body", "wolf3d", "plane", "cube", "mesh"];
                const isSkin = skinKeywords.some(keyword => child.name.toLowerCase().includes(keyword));
                
                if (isSkin && child.name !== "EYEs001" && child.name !== "hair" && child.name !== "BODYSHIRT" && child.name !== "Keyboard" && !child.name.includes("sole")) {
                  child.material = new THREE.MeshStandardMaterial({
                    color: "#f1c27d", // Warm human skin tone
                    roughness: 0.8,
                    metalness: 0.1,
                  });
                }

                // T-shirt color update (Colorful - Vibrant Indigo)
                if (child.name === "BODYSHIRT") {
                  child.material = new THREE.MeshStandardMaterial({
                    color: "#6366f1", // Vibrant Indigo
                    roughness: 0.6,
                    metalness: 0.2,
                  });
                }

                // Pants color update (Cinematic Purple)
                if (child.name.toLowerCase().includes("pants") || 
                    child.name.toLowerCase().includes("bottom") || 
                    child.name.toLowerCase().includes("trousers")) {
                  child.material = new THREE.MeshStandardMaterial({
                    color: "#a78bfa", 
                    roughness: 0.8,
                    metalness: 0.1,
                  });
                }

                // Shoes color update (Dark Charcoal)
                if (child.name.toLowerCase().includes("shoe") || child.name.toLowerCase().includes("sole")) {
                  child.material = new THREE.MeshStandardMaterial({
                    color: "#1a1a1a", 
                    roughness: 0.9,
                    metalness: 0.1,
                  });
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            
            const footR = character.getObjectByName("footR");
            const footL = character.getObjectByName("footL");
            if (footR) footR.position.y = 3.36;
            if (footL) footL.position.y = 3.36;
            
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
