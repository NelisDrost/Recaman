let sketch = function(p) {
    p.setup = function () {
        p.createCanvas(800, 800);
        p.background(100);
        p.canvas = new BinaryZoom(1000, p)

        // Label and darken first level
        p.canvas.active.textSize(p.canvas.res/10);
        p.canvas.active.textAlign(p.LEFT, p.TOP);
        p.canvas.active.text(1, 10, 10);
        p.canvas.active.background(0,0,0,20);
    }

    p.draw = function () {
        let N = 1 + p.millis() / 1000;
        p.background(100);
        p.canvas.auto_scale_draw(N);
    }
};

new p5(sketch, 'zoom-test')
