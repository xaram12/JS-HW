let a = parseInt((Math.random() - .5) * 2 * 100); // (Math.random() - .5) * 2  выражение взял в интернете 
let b = parseInt((Math.random() - .5) * 2 * 100);


function num() {
    if (a >= 0 && b >= 0) {
        alert(a - b)
    }
    if (a < 0 && b < 0) {
        alert(a * b)
    }
    if (a < 0 && b >= 0 || a >= 0 && b < 0) {
        alert(a + b)
    }
}
num();

let x = 5
let y = 4
let z

function sum() {
    return z = x + y
}
sum()