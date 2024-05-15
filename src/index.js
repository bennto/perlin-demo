import "./styles.css";
import * as mouse from "./mouse";
import * as THREE from "three";
import { gsap } from "gsap";
import { storedXPos } from "./mouse";

var camera, scene, renderer, geometry, material, sphere;
var blobData = { flux: 0, goop: 60, edge: 1 };
//CALL FUNCTIONS
init();
animate();

gravMouse();
blobReact();

//FUNCTION LISTS
function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    10000,
  );
  camera.position.z = 500;
  scene.add(camera);

  geometry = new THREE.SphereGeometry(200, 100, 100);
  material = new THREE.MeshNormalMaterial();

  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
}

function update() {
  const time = performance.now() * 0.001; //time dialation
  const positions = sphere.geometry.attributes.position.array;

  const sinFlux = Math.sin(++blobData.flux / 100) * blobData.goop;
  const rad = 140; //radius

  for (let i = 0; i < positions.length; i++) {
    const p = new THREE.Vector3(
      positions[i * 3],
      positions[i * 3 + 1],
      positions[i * 3 + 2],
    );

    p.normalize().multiplyScalar(
      rad +
        sinFlux *
          noise.perlin3(
            p.x * blobData.edge + time,
            p.y * blobData.edge,
            p.z * blobData.edge,
          ),
    );

    positions[i * 3] = p.x;
    positions[i * 3 + 1] = p.y;
    positions[i * 3 + 2] = p.z;
  }

  sphere.geometry.attributes.position.needsUpdate = true;
  // sphere.geometry.computeVertexNormals();
}

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.001;
  sphere.rotation.y += 0.002;
  update();

  renderer.render(scene, camera);
}

function gravMouse() {
  if (mouse.storedXPos === mouse.xPos && mouse.storedYPos === mouse.yPos)
    return;
  gsap.to(sphere.position, {
    x: mouse.xPos,
    y: -mouse.yPos,
    ease: "none",
  });

  mouse.storedXPos = mouse.xPos;
  mouse.storedYPos = mouse.yPos;
}

let tl = gsap.timeline({});
tl.to(blobData, {
  edge: 2,
  duration: 1,
  ease: "none",
});
function blobReact() {
  
}

gsap.ticker.add(gravMouse);
gsap.ticker.add(blobReact);

window.addEventListener("mousemove", gravMouse);
