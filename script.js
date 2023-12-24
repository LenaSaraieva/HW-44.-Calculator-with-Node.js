import { x, y } from "./components/const.js";
import Calculator from "./components/module.js";
import { subtract } from "./components/sub.js";
import { multiplication } from "./components/mult.js";

const calculator = new Calculator(x,y);
console.log(calculator.sum());
console.log(subtract(x, y));
console.log(multiplication(x, y));


