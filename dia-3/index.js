let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Digite seu nome:");
idade = Number(prompt("Digite sua idade:"));
altura = Number(prompt("Digite sua altura:"));
peso = Number(prompt("Digite seu peso:"));

let anoDeNascimento = 0
let imc = 0

anoDeNascimento = 2023 - idade
imc = peso / (altura * altura)

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " + altura + " de altura, pesa " + peso + "kg seu IMC é " + imc + " Kg/m2")