// import Point from /lib/Point; // 此处并不能使用ES6
// const Point = require("./lib/Point"); // 不使用解构赋值是不行的
const Point = require("./lib/Point").default; // 引用babel编译后的ES5
const {Line} = require("./lib/Line");


console.log("hello");

let po = new Point(1, 2);
let pt = new Point(3, 4);

console.log(po.toString());
console.log(new Line(po.x, po.y, pt.x, pt.y).toString());
