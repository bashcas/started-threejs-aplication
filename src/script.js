import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Scene
const scene = new THREE.Scene()

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: '#ff0569' })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

window.addEventListener('resize', () => {
    //Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //Update camera
    camera.aspect = sizes.width / sizes.height
    // Must be called after any change of parameters.
    camera.updateProjectionMatrix()

    //Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

window.addEventListener('dblclick', () => {
    //To make it work for Safari
    const fullscreenElement =
        document.fullscreenElement || document.webkitFullscreenElement

    if (!fullscreenElement) {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen()
        } else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen()
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    }

    //  if (!document.fullscreenElement) {
    //      canvas.requestFullscreen()
    //  } else {
    //      document.exitFullscreen()
    //  }
})

// Camera
// Parameters = 1. angle field of view (vertical)
// 2. Aspect ratio = width / height (it has to have the same measures as the renderer)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 2
camera.position.y = 1
camera.position.x = 2

scene.add(camera)

const canvas = document.querySelector('.webgl')

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const animate = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}

animate()
