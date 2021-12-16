class Recaman {
    constructor(n) {
        this.sequence = [0];
        this.used = new Set();
        this.used.add(0);

        let i = 0;
        let j = 1;
        for (let ii = 0; ii < n; ii++) {
            if ((i - j) > 0 && !this.used.has(i-j)) {
                i = i - j;
            } else {
                i = i + j;
            }
            this.sequence.push(i);
            this.used.add(i);
            j++;
        }
    }
}

class SequencePlotter {
    constructor(axis, seq) {
        this.axis = axis;
        this.seq = seq;
    }

    plot() {
        for (let i = 0; i < this.seq.sequence.length - 1; i++) {
            // console.log(i, this.seq.sequence[i]);
            this.plot_partial(this.seq.sequence[i], this.seq.sequence[i + 1], 1 - 2 * (i % 2))
        }
    }

    plot_partial(x1, x2, up) {
        push();
        translate(width/2, height/2);
        let cx = (x1 + x2) * 0.5;
        let hx = abs((x2 - x1) * 0.5);
        noFill();
        beginShape();
        for (let i = 0.0; i <= 1.01; i += 0.001) {
            let x = cx - hx * cos(i * PI);
            let y = up * hx * sin(i * PI);
            // let x = i * 50;
            // let y = i;
            let [px, py] = this.axis.pointToAxis(x, y);
            // console.log(cx, hx);
            // let pt = this.axis.pointToAxis(x, y);
            // console.log(x, y);
            // console.log(px, py);
            vertex(px, py);
        }
        endShape();
        pop();
    }

}