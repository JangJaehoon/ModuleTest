import { num, add, User } from "./test.js";
import * as testModule from "./test.js";
import testModule2 from "./test2.js";

console.log(testModule.num);
console.log(testModule.add(10, 19));
console.log(new testModule.User("Hyobin"));
console.log(new testModule2("Hyobin2"));

// const num = 20;
// console.log(num);

if (typeof document !== "undefined") {
  // window.addEventListener("DOMContentLoaded", (event) => {
  // });
}
