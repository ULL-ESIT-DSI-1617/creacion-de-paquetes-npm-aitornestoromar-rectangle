/**
 * Created by chinegua on 23/4/17.
 */
var Figura = require('ull-shape-aitor-nestor-omar-35l2v3-1')
class Rectangle extends Figura {
    constructor(options) {
        Figura.Shapes.Rectangle = Rectangle;
        super("Rectangle",options)
        this.width = options.width;
        this.height = options.height;
    }
    getArea() {
        return this.width * this.height;
    }
}

module.export = Rectangle;