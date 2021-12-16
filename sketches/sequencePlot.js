let sketch = function(p) {
    p.setup = function () {
        p.createCanvas(800, 800);
        p.background(100);

        p.sequence = new Recaman();
        p.axis = new SpiralAxis(p);
        p.plotter = new SequencePlotter(p.axis, p.sequence)
        last_i = 0;
    }

    let last_i;
    p.draw = function () {
        let next_i = p.floor(p.millis() / 500);
        p.plotter.plot_partial(p, p.sequence.get(last_i),
            p.sequence.get(next_i), 1);
        last_i = next_i;
    }
};

new p5(sketch, 'sequence-plot-test')
