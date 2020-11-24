let arg1 = parseInt(prompt("введите число 1"));
let arg2 = parseInt(prompt("введите число 2"));
let sum;
let sub;
let div;
let mul;



function sumFunc(a, b) {
    return sum = a + b;
}

function subFunc(a, b) {
    return sub = a - b;
}

function divFunc(a, b) {
    return div = a / b;
}

function mulFunc(a, b) {
    return mul = a * b;
}

sumFunc(arg1, arg2);
subFunc(arg1, arg2);
divFunc(arg1, arg2);
mulFunc(arg1, arg2);


let operation = prompt("Введите действие: сложеие, вычитание, умножение или деление");
switch (operation) {
    case ("сложение"):
        alert(sum);
        break;
    case ("вычитание"):
        alert(sub);
        break;
    case ("умножение"):
        alert(mul);
        break;
    case ("деление"):
        alert(div);
        break;
    default:
        alert("Вы неправильно ввели действие");


}