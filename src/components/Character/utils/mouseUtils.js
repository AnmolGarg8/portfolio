import * as THREE from "three";

export const handleMouseMove = (event, setMousePosition) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (event, setMousePosition) => {
  const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchEnd = (setMousePosition) => {
  setTimeout(() => {
    setMousePosition(0, 0, 0.03, 0.03);
    setTimeout(() => {
      setMousePosition(0, 0, 0.1, 0.2);
    }, 1000);
  }, 2000);
};

export const handleHeadRotation = (
  headBone,
  mouseX,
  mouseY,
  interpolationX,
  interpolationY,
  lerp
) => {
  if (!headBone) return;
  if (window.scrollY < 200) {
    const maxRotationY = Math.PI / 6; // 30 degrees side to side
    const maxRotationX = Math.PI / 10; // ~18 degrees up and down

    headBone.rotation.y = lerp(
      headBone.rotation.y,
      mouseX * maxRotationY,
      interpolationY
    );

    // If mouseY is 1 (top), we want head to tilt UP (negative X rotation)
    // If mouseY is -1 (bottom), we want head to tilt DOWN (positive X rotation)
    headBone.rotation.x = lerp(
      headBone.rotation.x,
      -mouseY * maxRotationX,
      interpolationX
    );

  } else {
    if (window.innerWidth > 1024) {
      headBone.rotation.x = lerp(headBone.rotation.x, -0.4, 0.03);
      headBone.rotation.y = lerp(headBone.rotation.y, -0.3, 0.03);
    }
  }
};
