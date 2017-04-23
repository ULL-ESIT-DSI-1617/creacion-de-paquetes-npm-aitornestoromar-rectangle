/**
 * Created by chinegua on 23/4/17.
 */
class Rectangle extends Figura {
    constructor(options) {
        Shapes.Rectangle = Rectangle;
        super("Rectangle",options)
        this.width = options.width;
        this.height = options.height;
    }
    getArea() {
        return this.width * this.height;
    }
}

module.export = Rectangle;