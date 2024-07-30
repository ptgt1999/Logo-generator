//required for app start up
const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Triangle, Square} = require("./lib/shapes.js");
const { default: Choices } = require("inquirer/lib/objects/choices");
const requiredName = "./examples/logo.svg";

const userInput = [
    {
        type: "input", 
        message: "Enter text you would like to display: ", 
        name: "textCharacters",
        validate: function (value) {
            if (value.length >= 1) {
                return true;
            } else {
                return "Enter at least one character";
            }
        }
    },
    {
        type: "input", 
        message: "Please enter the text color or hex code you would like to use: ", 
        name: "textColor", 
        default: "black",
    },
    {
        type: "list", 
        message: "Choose the shape you would like to display", 
        choices: ["Circle", "Triangle", "Square"], 
        name: "shape",
    },
    {
        type: "input", 
        message: "Please enter the color or hex code you would like to use for the background: ", 
        name: "backgroundColor", 
        default: "red",
    },
];

const shapeObject = {
    Circle: Circle, 
    Triangle: Triangle, 
    Square: Square
};

function svgGenerator(responses) {
    const {textCharacters, textColor, shape, backgroundColor} = responses;
    const shapeOption = shapeObject[shape];
    const shapeVersion = new shapeOption();

    shapeVersion.setColor(backgroundColor);

    return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        ${shapeVersion.render()}
        <text x="150" y="100" dy=".3em" text-anchor="middle" fill="${textColor}">${textCharacters}</text>
    </svg>`
}

function fileCreation(requiredName, data) {
    fs.writeFile (requiredName, data, (error) =>
    error ? console.error(error) : console.log("Generated logo.svg", "File created!"));
}

function init() {
    inquirer.prompt(userInput)
    .then((respones) => {
        const svgString = svgGenerator(respones);
        fileCreation(requiredName, svgString);
    })
    .catch((error) => console.error("ERROR SVG not generated", error));
}

init();