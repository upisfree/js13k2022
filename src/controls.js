// keyboard
let keys = {};

window.onkeydown = (e) => {
  keys[e.code] = true;
};

window.onkeyup = (e) => {
  delete keys[e.code];
};

function updateKeyboard() {
  for (const c in keys) {
    if (c) {
      if (c == 'KeyW') {
        camPosition.z += playerSpeed;

        // add(
        //   camPosition,
        //   scale(
        //     crossProduct(camRotation, UP),
        //     playerSpeed
        //   )
        // );
      }

      if (c == 'KeyS') {
        camPosition.z -= playerSpeed;
      }

      if (c == 'KeyA') {
        camPosition.x -= playerSpeed;
      }

      if (c == 'KeyD') {
        camPosition.x += playerSpeed;
      }
    }
  }
}

// mouse
canvas.onclick = () => {
  canvas.requestPointerLock();
};

document.addEventListener('mousemove', updateMouse);

function updateMouse(e) {
  if (document.pointerLockElement === canvas) {
    camRotation.x += e.movementX * mouseSpeed;
    camRotation.y += e.movementY * mouseSpeed;

    camTarget = scale(unitVector(camRotation), 1);

    // camTarget.x += e.movementX * mouseSpeed;
    // camTarget.y += e.movementY * mouseSpeed;

    console.log(e.movementX, e.movementY);
  }
}
