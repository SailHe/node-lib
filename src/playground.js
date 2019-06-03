import Point from "./class/Point";
import {Line} from "./class/Line";


console.log("hello");

export const main = () => {
    
    let po = new Point(1, 2);
    let pt = new Point(3, 4);

    console.log(po.toString());
    console.log(new Line(po.x, po.y, pt.x, pt.y).toString());
}
