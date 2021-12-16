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
        let N = p.millis() / 100;
        let cols = 13;
        let rows = 32;
        let start = p.floor(N / cols) * cols;

        p.textSize(20);
        p.textAlign(p.RIGHT, p.TOP)

        for (let i = start; i < start + rows * cols; i+=cols) {
            for (let j = 0; j < cols; j++) {
                let arr = p.sequence.get(i, i + cols)
                p.text(arr[j], 60 * (j + 1), 2 * (i - start - (N % cols)))
            }
        }
    }
};

new p5(sketch, 'sequence-test')
