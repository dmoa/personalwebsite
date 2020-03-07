// Made with Zdog

// create illo
const illo = new Zdog.Illustration({
    // set canvas with selector
    element: '#zdog-canvas',
});

// add circle
new Zdog.Ellipse({
    addTo: illo,
    diameter: 40,
    stroke: 10,
    color: 'pink',
});


function animate() {
    // rotate illo each frame
    illo.rotate.y += 0.03;
    illo.rotate.x += 0.03;
    illo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame(animate);
}
// start animation
animate();