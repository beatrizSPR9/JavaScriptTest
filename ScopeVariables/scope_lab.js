// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar); // Output: "I'm a block-scoped var";
// console.log(blockLet); // Output: "Uncaught ReferenceError: blocklet is not defined"
// console.log(blockConst); // Output: "Uncaught ReferenceError: blockconst is not defined"

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();

// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

{
    let a = 1;
    const b = 1;
    var c = 1;

    a = 2;
    // b = 2; // Uncaught TypeError: Assignment to constant variable.
    c = 2;
}

// Funciona tudo bem
a = 3;
b = 3;
c = 3;