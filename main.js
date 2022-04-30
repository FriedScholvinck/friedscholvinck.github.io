import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true
});
renderer.setClearColor( 0x000000, 0);

// Colors
// const color = rgba(253,71,102,1);
const color = 0xfd4766;
const color_transparent = 0xfd476601;

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// TorusKnot
const geometry = new THREE.TorusKnotGeometry(10, 1, 300, 20);
const material = new THREE.MeshStandardMaterial({ color: color });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers
// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

var stars = [];

function addStar() {
  // const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const geometry = new THREE.SphereGeometry(4);
  const material = new THREE.MeshStandardMaterial({color: color});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
  stars.push(star);
}

// Click Animation
function changeColor() {
  // var new_color = color * Math.random();
  // torus.material.color.set(new_color);
  // document.body.style.backgroundColor = color;
  // torus.material.needsUpdate = true;

  Array(10).fill().forEach(addStar);
}
document.body.onclick = changeColor;

// Scroll Animation
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.02;
  camera.position.x = t * -0.002;
  camera.rotation.y = t * -0.0005;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.0001;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.005;
  
  // controls.update();
  renderer.render(scene, camera);
}

animate();
