// Annotation
let a: number = 90;
console.log(a);

// Inference
let b = "pol";
// b = 90;

console.log(a);

// Arrays
let arr: any[] = [5, 6, 7, 8, 8, 9, 0, "hello", "jio", true, null, undefined];

let arr1: string[] = ["jio", "pol", "join"];

// Tuples

let arr2: [number, number] = [57, 87];

let data: [{ name: string }, { name: string }, { name: string }] = [
  { name: "pol" },
  { name: "pol" },
  { name: "pol" },
];

// enums - options

enum Role {
  ADMIN,
  SUP_ADMIN,
  USER,
}

let role: Role = Role.USER;

// Union Types
let yolo: string | number | boolean | bigint = "rahul";
yolo = 23;

yolo = true;
yolo = 900000n;

// Literal Types
type Status = "pending" | "success" | "error";

let status: Status = "success";
