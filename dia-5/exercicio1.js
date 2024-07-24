// Exercicio 1

num1 = Number(prompt("Digite o primeiro número:"))
num2 = Number(prompt("Digite o segundo número:"))

operacao = prompt("Qual operação deseja fazer? (+,-,*,/)")

switch (operacao) {
    case "+":
        console.log(num1 + num2)
        break
    case "-":
        console.log(num1 - num2)
        break
    case "*":
        console.log(num1 * num2)
        break
    case "/":
        console.log(num1 / num2)
        break
    default:
        console.log("Erro! Digite uma operação válida.")
        break
}