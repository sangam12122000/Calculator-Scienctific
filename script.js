function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function calculate() {

    let display = document.getElementById("display");
    let expression = display.value;
    let result;


    expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
    expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
    expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');


    // expression = expression.replace(/(sin|cos|tan)\(/g, function(match, func) {
    //   return func + '(' + Math.PI / 180 + '*';
    // });

    result = math.evaluate(expression);
    display.value = result.toFixed(4);

}

function squareRoot() {
    let display = document.getElementById("display");
    display.value = Math.sqrt(display.value);

}

function Log() {
    let display = document.getElementById("display");
    display.value += 'log('
}

function pi() {
    let display = document.getElementById("display");
    display.value = display.value * math.pi();
}

function power() {
    let display = document.getElementById("display");
    display.value = display.value ** display.value
}
function radians_to_degrees() {
    let display = document.getElementById("display");
    let radians = parseFloat(display.value);
    let degrees = radians * (180 / Math.PI);
    display.value = degrees.toFixed(4);
}
function degrees_to_radians() {
    let display = document.getElementById("display");
    let degrees = parseFloat(display.value);
    let radians = degrees * (Math.PI / 180);
    display.value = radians.toFixed(4);
}
