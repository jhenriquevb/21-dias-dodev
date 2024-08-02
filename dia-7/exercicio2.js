const nome = prompt("Digite seu nome:");
const cpf = prompt("Digite seu cpf:");
let condicao = true;
let saldo = 300;
let mediaValores = 0;
let contador = 0;
let maiorValor = 0;
let valor;

do {
    valor = Number(prompt("Insira um valor:"));

    if (valor < 0) {
        console.log("Erro! Digite um valor positivo!");
    } else {
        opcaoCliente = prompt("Deseja sacar ou depositar? S ou D");
        if (opcaoCliente === "S") {
            if (valor > saldo) {
                console.log("Erro! Valor não disponivel no saldo!");
            } else {
                saldo -= valor;
                console.log(
                    "Operação realizada com sucesso, saldo na conta: " + saldo
                );
                mediaValores += valor;

                if (valor > maiorValor) {
                    maiorValor = valor;
                }
            }
        }

        if (opcaoCliente === "D") {
            saldo += valor;
            console.log(
                "Operação realizada com sucesso, saldo na conta: " + saldo
            );
            mediaValores += valor;
            if (valor > maiorValor) {
                maiorValor = valor;
            }
        }

        acaoUsuario = prompt(
            "Deseja continuar? Insira 1 pra continuar e 2 para parar."
        );

        if (acaoUsuario === "1") {
            condicao = true;
        } else if (acaoUsuario === "2") {
            condicao = false;
        } else {
            console.log("Opção inválida! Programa encerrado.");
            condicao = false;
        }

        contador++;
    }
} while (condicao);

console.log("Saldo total: " + saldo);
console.log("Maior valor inserido: " + maiorValor);
console.log("Média de valores inseridos: " + mediaValores / contador);
