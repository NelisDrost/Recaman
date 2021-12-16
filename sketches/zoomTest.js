let sketch = function(p) {
    p.setup = function () {
        p.createCanvas(500, 500);
        p.background(100);
        // p.noLoop();
        p.canvas = new BinaryZoom(1000, p)
        p.canvas.active.background(200);
        // p.noLoop()
    }

    p.draw = function () {
        let N = p.millis() / 1000;
        p.background(100);
        // p.canvas.draw(p, 1)
        // p.canvas.swap(false, true)
        p.canvas.autodraw(N);
    }

    p.mousePressed = function() {
        p.draw();
    }
};

var my_sketch = new p5(sketch, 'zoom-test')
