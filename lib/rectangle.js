/**
 * Creación de paquetes npm - Square
 *
 * https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-aitor-nestor-omar-35l2v3-1-square
 *
 * Aitor Bernal Falcón
 *
 * Equipo: aitor-nestor-omar
 *
 * Creación de un paquete npm con el código de la clase "Square" para el cálculo de área
 */


var Figura = require('ull-shape-aitor-nestor-omar-35l2v3-1')
class Rectangle extends Figura {
    constructor(options) {
        Figura.Shapes.Rectangle = Rectangle;
        super("Rectangle",options)
        this.width = options.width;
        this.height = options.height;
    }
    /**
     * La función getArea calcula el área de un cuadrado
     * @param hereda directamente de Figura
     * @return {number} retorna el área del cuadrado
     */
    getArea() {
        return this.width * this.height;
    }
}

module.exports = Rectangle;