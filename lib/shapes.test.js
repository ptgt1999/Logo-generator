const { Circle, Triangle, Square } = require("./shapes.js");

describe("Circle", () => {
    it("should create a circle object", () => {{
        const circle = new Circle();
        circle.setColor("green")
        expect(circle.render()).toEqual(
            '<circle fill="green" cx="150" cy="100" r="100"/>'
        );
    }});
    });

describe("Triangle", () => {
    it("should create a triangle object", () => {{
        const triangle = new Triangle();
        triangle.setColor("red")
        expect(triangle.render()).toEqual(
            '<polygon fill="red" points="150,0 300,200 0,200"/>'
        );
    }});
    });

describe("Square", () => {
    it("should create a square object", () => {{
        const square = new Square();
        square.setColor("yellow")
        expect(square.render()).toEqual(
            '<rect fill="yellow" x="0" y="0" width="300" height="200"/>'
        );
    }});
    });