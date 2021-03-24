import "./style.css"
import * as THREE from "three"

// Scene
const scene = new THREE.Scene()

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "#ff0569" })
const mesh = new THREE.Mesh(geometry, material)
mesh.rotation.x = 0.5
mesh.rotation.y = 1
scene.add(mesh)

// Sizes
const sizes = {
    width: 880,
    height: 600,
}

// Camera
// Parameters = 1. angle field of view (vertical)
// 2. Aspect ratio = width / height (it has to have the same measures as the renderer)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 2
scene.add(camera)

// Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)

//As you were taking a photo
renderer.render(scene, camera)
