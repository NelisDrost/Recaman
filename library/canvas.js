class BinaryZoom {
    // Allows infinitely zooming in and out of an image by swapping out canvases when they get
    // too small (todo: or big)
    constructor(res, target) {
        this.res = res;
        this.active = target.createGraphics(this.res, this.res);
        this.level = 1;
        this.t = target;
    }

    /**
     * Swaps out the current canvas to one at half the scale (twice the size), draws the current
     * canvas to the center of the new one
     * @param darken tint the canvas after swap, to visualise swapping
     * @param label label the new canvas with its level
     */
    swap(darken = false, label = false) {
        // Create new canvas and copy current image
        let img = this.t.createGraphics(this.res, this.res);
        img.image(this.active, this.res/4, this.res/4, this.res/2, this.res/2);

        // Optionally tint and label the new canvas
        if (darken) {
            img.background(0,0,0,20)
        }
        if (label) {
            img.textSize(this.res/10);
            img.textAlign(this.t.LEFT, this.t.TOP);
            img.text(this.level + 1, 10, 10);
        }

        // Replace current canvas
        this.active.remove();
        this.active = img;
        this.level++;
    }

    /**
     * Draw the current canvas to target at given scale
     * @param scale At 1.0, fits 1:1 within target, at 0.5, target is filled with half of active canvas
     */
    draw(scale) {
        let offset = (1 - scale) * 0.5 * this.res;
        let depth = this.res - 2 * offset;
        this.t.image(this.active, 0, 0, this.t.width, this.t.height, offset, offset, depth, depth);
    }

    /**
     * Automatically scales current active canvas (swapping if necessary), and draws at correct scale
     * @param N Linear scale factor, such that level 1 canvas fills 1 / 2^(N-2) of target window
     */
    auto_scale_draw(N) {
        // Swap if necessary
        let target_level = this.t.floor(N);
        while (target_level > this.level) {
            this.swap(true, true);
        }
        // Calculate appropriate scale and draw
        let scale = 1 / 2 ** (1 - N % 1);
        this.draw(scale)
    }
}