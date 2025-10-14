let a = 10
let b = 10

switch(true){
    case(a > b):
    console.log("Максимальне число " + a);
    break;

    case(a < b):
    console.log("Максимальне число " + b);
    break;

    case(a === b):
    console.log("Числа рівні " + a + " " + b);
    break;
}