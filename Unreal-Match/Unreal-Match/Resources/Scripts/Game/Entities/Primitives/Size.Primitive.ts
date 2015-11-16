/** Size of someone object */
class Size {
    /** Objects width */
    public Width: number;
    /** Objects height */
    public Height: number;

    constructor(w: number, h: number) {
        this.Width = w;
        this.Height = h;
    }

    /** Return new size  multiplied on number */
    public ReturnMultiplied(multiplier: number): Size {
        return new Size(this.Width * multiplier, this.Height * multiplier);
    }
}

export = Size;
