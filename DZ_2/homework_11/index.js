// let x = null;
// let x = 0;        // falsy 
// let x = "";       // falsy 
// let x = undefined;// falsy 
let x = "hello";  // truthy 


if (!x) {
  x = "default";
  console.log(x); 
}
