"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Annotation
let a = 90;
console.log(a);
// Inference
let b = "pol";
// b = 90;
console.log(a);
// Arrays
let arr = [5, 6, 7, 8, 8, 9, 0, "hello", "jio", true, null, undefined];
let arr1 = ["jio", "pol", "join"];
// Tuples
let arr2 = [57, 87];
let data = [
    { name: "pol" },
    { name: "pol" },
    { name: "pol" },
];
// enums - options
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUP_ADMIN"] = 1] = "SUP_ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
let role = Role.USER;
// Union Types
let yolo = "rahul";
yolo = 23;
yolo = true;
yolo = 900000n;
let status = "success";
//# sourceMappingURL=index.js.map