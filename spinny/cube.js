let illo = new Zdog.Illustration({
    element: '#zdog-canvas',
    rotate: {
        x: -Zdog.TAU / 10,
        y: Zdog.TAU / 8
    },
    dragRotate: true,
})

let smallGroup = new Zdog.Group({
    addTo: illo
})
let bigGroup = new Zdog.Group({
    addTo: illo
})

let smallCube = new Zdog.Box({
    addTo: smallGroup,
    width: 20,
    height: 20,
    depth: 20,
    storke: false,
    fill: true,
    color: '#175d96'
})
smallCube.copy({
    addTo: smallGroup,
    stroke: 1,
    fill: false,
    color: '#fff'
})

let bigCube = new Zdog.Box({
    addTo: illo,
    width: 40,
    height: 40,
    depth: 40,
    stroke: false,
    fill: true,
    color: 'rgba(141, 214, 249, 0.5)'
})
bigCube.copy({
    addTo: bigCube,
    stroke: 3,
    fill: false,
    color: '#FFF'
})

function animate() {
    smallGroup.rotate.y += 0.01
    bigCube.rotate.y -= 0.01
    // Fun rotation
    // illo.rotate.z += 0.01
    illo.updateRenderGraph()
    requestAnimationFrame(animate)
}

animate()