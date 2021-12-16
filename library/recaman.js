if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
}

/**
 * Abstract base clase for number sequences
 * @class Sequence
 */
class Sequence {
    constructor() {
        if (this.constructor === Sequence) {
            throw new Error("Abstract base class can't be instantiated");
        }
        this.sequence = [];
    }

    /**
     * Returns the length of the generated sequence
     * @returns {number}
     */
    length() {
        return this.sequence.length;
    }

    /**
     * Generates missing terms up to the n'th term
     * @param n
     */
    generate(n) {
        throw new Error("Not implemented in abstract class");
    }

    /**
     * Returns either a single value from the sequence, or a slice
     * @param start
     * @param end
     */
    get(start, end) {
        return this._get_from_sequence(start, end, this.sequence)
    }

    _get_from_sequence(start, end=null, sequence) {
        // Generate extra values if needed
        this.generate(Math.max(start, end))

        // Return either slice or single value as requested
        if (end !== null) {
            return sequence.slice(start, end)
        } else {
            return sequence[start]
        }
    }
}

class Recaman extends Sequence {
    constructor(n) {
        super();
        // First term in the sequence
        this.sequence.push(0);
        this.used = new Set();
        this.used.add(0);

        // The step to the next term
        this.j = 1;
        this.steps = [0];

        if (n !== null) {
            this.generate(n);
        }
    }

    generate(n) {
        // Skip generation if we've already reached n
        if (this.j > n) {
            return;
        }

        let i = this.sequence.last();
        for (;this.j <= n; this.j++) {
            if ((i - this.j) > 0 && !this.used.has(i-this.j)) {
                i = i - this.j;
                this.steps.push(-this.j);
            } else {
                i = i + this.j;
                this.steps.push(this.j);
            }
            this.sequence.push(i);
            this.used.add(i);
        }
    }

    /**
     * Gets the step (or steps) taken to reach each term in the sequence
     */
    get_step(start, end=null) {
        return this._get_from_sequence(start, end, this.steps);
    }
}
