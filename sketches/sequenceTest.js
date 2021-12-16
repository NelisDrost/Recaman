let sketch = function(p) {
    p.setup = function () {
        p.createCanvas(800, 800);
        p.background(100);
        p.sequence = new Recaman();
    }

    p.draw = function () {
        p.scroll_sequence();
    }

    p.scroll_sequence = function () {
        // Displays a scrolling list of sequence values
        p.background(100);
        p.textSize(20);
        p.textAlign(p.RIGHT, p.TOP)

        // Pause briefly at the start
        let N = Math.max(0, -20 + p.millis() / 100);

        // Rows/columns of sequence terms
        let cols = 13;
        let rows = 32;
        let start = p.floor(N / cols) * cols;

        for (let i = start; i < start + rows * cols; i+=cols) {
            // Get 1 row at a time
            let arr = p.sequence.get(i, i + cols)
            let stp = p.sequence.get_step(i, i + cols)

            for (let j = 0; j < cols; j++) {
                // Color steps down in red
                if (stp[j] > 0) {
                    p.stroke(0);
                } else {
                    p.stroke(255, 0, 0);
                }
                p.text(arr[j], 60 * (j + 1), 5 + 2 * (i - start - (N % cols)))
            }
        }
    }
};

new p5(sketch, 'sequence-test')
