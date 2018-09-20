class Singleton {
  static staticAttribute = 3;

  constructor() {
    this._message = "test";
  }

  instanceMethod() {
    return "instanceMethod";
  }

  static staticMethod() {
    return "staticMethod";
  }

  get message() {
    return this._message;
  }

  set message(msg) {
    this._message = msg;
  }
}

export default new Singleton();

// ...

// index.js

import Singleton from "./Singleton";

const a = new Singleton();

console.log(a._type); // 'test'
console.log(a.instanceMethod()); //
console.log(a.staticMethod()); // error not defined
console.log(a.constructor.staticMethod()); // 'staticMethod'
console.log(a.type); // 'test'
a.type = "hans";
console.log(a.type); // 'hans'
