// ------------------------- demo ------------------------- //

var illoElem = document.querySelector('#zdog-canvas');
var sceneSize = 24;
var minWindowSize = Math.min(window.innerWidth - 20, window.innerHeight - 20);
var zoom = Math.floor(minWindowSize / sceneSize);
var TAU = Zdog.TAU;

var illo = new Zdog.Illustration({
    element: illoElem,
    rotate: {
        x: TAU * -35 / 360,
        y: TAU * 1 / 8
    },
    scale: 10,
    dragRotate: true,
});

// ----- model ----- //

var cube = new Zdog.Anchor({
    addTo: illo,
    scale: 2,
});

var oneUnit = new Zdog.Vector({
    x: 1,
    y: 1
});

var side = new Zdog.Anchor({
    addTo: cube,
    translate: {
        z: 1
    },
});

var dot = new Zdog.Shape({
    addTo: side,
    translate: oneUnit.copy(),
    stroke: 5,
    color: 'navy',
    // visible: false,
});

dot.copy({
    translate: {
        x: -1,
        y: 1
    }
});
dot.copy({
    translate: {
        x: 1,
        y: -1
    }
});
dot.copy({
    translate: {
        x: -1,
        y: -1
    }
});

// more dots
dot.copy({
    translate: {
        x: 1
    }
});
dot.copy({
    translate: {
        x: -1
    }
});
dot.copy({
    translate: {
        y: -1
    }
});
dot.copy({
    translate: {
        y: 1
    }
});

side.copyGraph({
    translate: {
        z: -1
    },
});

var midDot = dot.copy({
    addTo: cube,
});

midDot.copy({
    translate: {
        x: -1,
        y: 1
    }
});
midDot.copy({
    translate: {
        x: 1,
        y: -1
    }
});
midDot.copy({
    translate: {
        x: -1,
        y: -1
    }
});


// ----- animate ----- //

var keyframes = [{
        x: 0,
        y: 0,
        z: 0
    },
    {
        x: 0,
        y: 0,
        z: TAU / 4
    },
    {
        x: -TAU / 4,
        y: 0,
        z: TAU / 4
    },
    {
        x: -TAU / 4,
        y: 0,
        z: TAU / 2
    },
];

var t = 0;


function animate() {
    var easeT = Zdog.easeInOut(t % 1, 4);
    var turnLimit = keyframes.length - 1;
    var turn = Math.floor(t % turnLimit);
    var keyA = keyframes[turn];
    var keyB = keyframes[turn + 1];
    cube.rotate.x = Zdog.lerp(keyA.x, keyB.x, easeT);
    cube.rotate.y = Zdog.lerp(keyA.y, keyB.y, easeT);
    cube.rotate.z = Zdog.lerp(keyA.z, keyB.z, easeT);
    t += 1 / 75;

    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();