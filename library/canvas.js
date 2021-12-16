class BinaryZoom {
    constructor(res, target) {
        this.res = res;
        this.active = target.createGraphics(this.res, this.res);
        this.level = 1;
        this.t = target;
    }

    swap(darken, label) {
        let img = this.t.createGraphics(this.res, this.res);
        img.image(this.active, this.res/4, this.res/4, this.res/2, this.res/2);
        if (darken) {
            img.background(0,0,0,20)
        }
        if (label) {
            img.textSize(this.res/10);
            img.textAlign(this.t.LEFT, this.t.TOP);
            img.text(this.level + 1, 10, 10);
        }
        this.active.remove();
        this.active = img;
        this.level++;
    }

    draw(scale) {
        // Draw current canvas such that
        let offset = (1 - scale) * 0.5 * this.res;
        let depth = this.res - 2 * offset;
        this.t.image(this.active, 0, 0, this.t.width, this.t.height, offset, offset, depth, depth);
    }

    autodraw(N) {
        let target_level = this.t.floor(N);
        while (target_level > this.level) {
            this.swap(true, true);
        }
        let scale = 1 / 2 ** (1 - N % 1);
        // let scale = 1 / (2 - N % 1);
        this.draw(scale)
    }
}