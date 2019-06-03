// import Point from Point; // 同样需要使用解构赋值
// import {Point} from Point; // 引号
// import {Point} from 'Point'; // 编译通过&&运行失败(Cannot find module 'Point') 是基于字符串查找实现的
import Point from './Point'; // ok

export class Line {
    constructor(xO, yO, xT, yT) {
      this.origin = new Point(xO, yO);
      this.target = new Point(xT, yT);
    }
  
    toString() {
      return this.origin.toString() + ' -> ' + this.target.toString();
    }
}
