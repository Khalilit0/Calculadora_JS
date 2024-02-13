function calculadora(num_1, operacion, num_2)
{
    switch (operacion) {
        case "+":
            return num_1 + num_2;
            break;
        case "-":
            return num_1 - num_2;
            break;
        case "*":
            return num_1 * num_2;
            break;
        case "/":
            return num_1 / num_2;
            break;
        case "**":
            return Math.pow(num_1, num_2);
            break;
        default:
            return 0;
    }
}
alert("La calculadora acepta suma(+), resta(-), multiplicacion(*), division(/) y potencias(**)")
let num1 = Number(prompt("Ingresa el primer numero"))
let operacionIngresada = prompt("Ingresa el tipo de operacion")
let num2 = Number(prompt("Ingresa el segundo numero"))

alert(calculadora(num1, operacionIngresada, num2));
alert("Presiona cargar pagina para volver a usar la calculadora")