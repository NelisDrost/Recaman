class SpiralAxis {
    constructor() {
        this.scale = 4;
        this.x_pow = 1;
    }

    drawAxis() {
        push();
        translate(width/2, height/2);
        // Loop over x-axis
        for (let i = 0; i < 100; i++) {
            // Line - loop over segments for smooth curve
            for (let j = 0.0; j < 1.0; j += 0.02) {
                let p0 = this.pointToAxis(i + j, 0);
                let p1 = this.pointToAxis(i + j + 0.01, 0);
                line(...p0, ...p1);
            }

            // if (i % 5 == 0) {
            //     text(this.gradient(i).toFixed(3), ...this.pointToAxis(i, 0));
            //     ellipse(...this.pointToAxis(i, 0), 5, 5)
            // }
            // text(i, ...this.pointToAxis(i, 0));

            // Tick
            let pi = this.pointToAxis(i, -this.scale * 3);
            let pj = this.pointToAxis(i,  this.scale * 3);
            line(...pi, ...pj);
        }
        pop();
    }

    pointToAxis(x, y) {
        let px = this.scale * (x + 2 * y) * sin(pow(x, this.x_pow) + .5707963267948966);
        let py = this.scale * (x + 2 * y) * cos(pow(x, this.x_pow) + .5707963267948966);
        // let px = this.scale *  (x + 2 * y) * cos(this.x_pow * x);
        // let py = this.scale * (x + 2 * y) * sin(this.x_pow * x);

        // gradient
        // let g = atan(this.x_pow);
        // let g2 = atan2(py, px);
        // let g3 = g2 + g - HALF_PI;
        //
        // px += y * cos(g3);
        // py += y * sin(g3);

        return [px, py]
    }

    gradient(x) {
        let [px, py] = this.pointToAxis(x, 0);

        // gradient
        let g = atan(this.x_pow);
        let g2 = atan2(py, px);
        let g3 = g2;

        return g3 * 180 / PI
    }
}