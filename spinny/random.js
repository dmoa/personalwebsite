// Uses random 3djs file
var JSFiles = ['cube.js', 'dots.js', 'donut.js', 'castle.js'];
function randomJS() {
    var index = Math.floor(Math.random() * JSFiles.length);
    var script = document.createElement('script');
    script.src = "spinny/" + JSFiles[index];
    document.getElementsByTagName('head')[0].appendChild(script);
};

randomJS();