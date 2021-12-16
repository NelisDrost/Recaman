let slider_scale;
let slider_pow;

let s_axis;
let rec;
let plotter;

let canvas;

function setup() {
    createCanvas(1000, 1000);
    // slider_scale = createSlider(0, 50, .10, 0);
    // slider_scale.position(10, 10);
    // slider_scale.style('width', '200px')
    // slider_pow = createSlider(0.0, 3.0, 0.3, 0);
    // slider_pow.position(10, 20);
    // slider_pow.style('width', '200px')

    // s_axis = new SpiralAxis();
    //
    // rec = new Recaman(10000);
    // plotter = new SequencePlotter(s_axis, rec)
    background(100);
    canvas = new BinaryZoom(2000);
    canvas.active.ellipse(1000, 1000, 1000, 1000)
}

function axis() {
    push();
    translate(width/2, height/2);
    line(0, 0, width/2, 0)
    for (let i = 0; i < 20; i++) {
        line(0, -5, 0, 5)
        translate(20, 0)
    }
    pop();
}

let s = 0.0;
function draw() {
    clear();
    background(100);
    s += deltaTime / 5000;
    if (s > 1) {
        s -= 1;
        canvas.swap(true);
        // canvas.darken();
    }
    let scale = lerp(1.0, 0.01, s % 1.0);
    textSize(40);
    text(s.toFixed(3), 10, 50);
    text(scale.toFixed(3), 10, 100);
    canvas.draw(this, scale);
    // ellipse(1000,1000,1000,1000)
    // s_axis.scale = slider_scale.value();
    // text(slider_scale.value().toFixed(3), 220, 15);
    // s_axis.x_pow = slider_pow.value();
    // text(slider_pow.value().toFixed(3), 220, 25);
    // s_axis.drawAxis();

    // plotter.plot_partial(plotter.seq.sequence[ii], plotter.seq.sequence[ii + 1], 1 - 2 * (ii % 2));
    // ii++
    // noLoop();
    // axis();
    // if (mouseIsPressed) {
    //     fill(0);
    // } else {
    //     fill(100);
    // }
    // ellipse(mouseX, mouseY, 80, 80);
}