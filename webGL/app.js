window.onload = function InitDemo() {
    console.log('app.js loaded and InitDemo called...')

    var canvas = document.getElementById("game-surface");
    var gl = canvas.getContext('webgl');

    if (!gl) {
        console.log('WebGl not supported.Falling back on experimental-webgl');
        gl = canvas.getContext('experimental-webgl');
    }
    if (!gl) {
        alert('Your browser does not support WebGL');
    }

    gl.clearColor(0.75, 0.85, 0.8, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

}

