class SequencePlotter {
    constructor(axis, seq) {
        this.axis = axis;
        this.seq = seq;
    }

    plot(target) {
        for (let i = 0; i < this.seq.sequence.length - 1; i++) {
            // console.log(i, this.seq.sequence[i]);
            this.plot_partial(target, this.seq.sequence[i], this.seq.sequence[i + 1], 1 - 2 * (i % 2))
        }
    }

    plot_partial(target, x1, x2, up) {
        console.log(x1, x2);
        target.push();
        target.translate(target.width / 2, target.height / 2);
        let cx = (x1 + x2) * 0.5;
        let hx = target.abs((x2 - x1) * 0.5);
        target.noFill();
        target.beginShape();
        for (let i = 0.0; i <= 1.01; i += 0.001) {
            let x = cx - hx * target.cos(i * target.PI);
            let y = up * hx * target.sin(i * target.PI);
            // let x = i * 50;
            // let y = i;
            let [px, py] = this.axis.pointToAxis(x, y);
            // console.log(cx, hx);
            // let pt = this.axis.pointToAxis(x, y);
            // console.log(x, y);
            // console.log(px, py);
            target.vertex(px, py);
        }
        target.endShape();
        target.pop();
    }

}