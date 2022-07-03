var operation = [];
var numbers = [];

function Init (){
    operation = [];
    numbers = [];
    index = 0;

    expression = document.getElementById("expression").value;
    readExpression(expression);
}
function readExpression (expr){
    parts = expr.split(" ");
    parts.forEach(function (b){
        if (isNaN(b) == false){
            numbers.push(parseFloat(b));
        }else{
            operation.push(b);
        }
    })
    Calculate();
}
function Calculate(){
    result = numbers[0];
    index = 0;

    operation.forEach(function (e) {
        result = Operate(result, numbers[index + 1], e);
        index++;
    })
    document.getElementById("answer").value = result;
}
function Operate(a, b, symbol){
    switch(symbol){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "^":
            return Math.pow(a, b);
        case "2/":
            return Math.sqrt(a);
        case "3/":
            return Math.cbrt(a);
        default:
            return 0;
    }
}
window.addEventListener("keydown", (key) => {
    if(key.keyCode == 13){
        Init();
    }
})