display = document.querySelector("#display")
var opera = []
var numbers = []

//metodos interativos com o html 
window.addEventListener("keypress", (key) => {
    new Audio("./beep2.wav").play()
})
function addChar(chara){
    new Audio("./beep2.wav").play()
    if(isNaN(chara) == false && chara == '.'){
        display.value += chara
    }else{
        display.value += chara
    }
}
function reset(){
    new Audio("./beep2.wav").play()
    display.value = "";
}
function del(){
    new Audio("./beep2.wav").play()
    display.value = display.value.substring(0, display.value.length - 1)
}

//metodo que inicia o calculo
function Init (){
    opera.length = 0
    numbers.length = 0
    c = addSpaces()
    expr = c.substr(c.lastIndexOf("\n")+1).split(" ")

    expr.forEach(function (b){
        if (isNaN(b) == false){
            numbers.push(parseFloat(b))
        }else{
            opera.push(b);
        }
    })
    filter('^')
    filter('/')
    filter('*')
    filter('-')
    filter('+')

    result = numbers[0]
    console.log(result)
    display.value += '\r\n'+result+'\r\n'
    new Audio("./beep1.wav").play();
}
function filter(operation){
    while(opera.includes(operation) == true){
        idx = opera.indexOf(operation)
        numbers[idx] = Operate(operation, [numbers[idx], numbers[idx+1]])
        numbers.splice(idx + 1, 1)
        opera.splice(idx, 1)
    }
}
function Operate(operation, nums){
    a = nums[0]
    b = nums[1]

    switch(operation){
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        case '^':
            return Math.pow(a, b)
        default:
            return NaN
    }
}

function addSpaces(){
    rewrited = ""
    s = display.value.substr(display.value.lastIndexOf("\n")+1).split("")
    s.forEach(function (e) {
        if(isNaN(e)){
            rewrited += " "+e+" "
        }else{
            rewrited += e
        }
    })
    return rewrited
}