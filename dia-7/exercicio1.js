let condicao = true;
let notas = 0;
let quantidadeMasculino = 0;
let quantidadeFeminino = 0;
let quantidadeFemininoMaiorQue7 = 0;
let maiorNotaHomens = 0;

while (condicao) {
    notaAluno = Number(prompt("Digite sua nota:"));
    sexoAluno = prompt("Qual seu sexo? Responda com M ou F.");
    adicionarNota = prompt("Deseja adicionar outra nota? S ou N.");

    notas += notaAluno;

    if (sexoAluno === "M") {
        quantidadeMasculino++;
        if (notaAluno > maiorNotaHomens) {
            maiorNotaHomens = notaAluno;
        }
    } else {
        quantidadeFeminino++;
        if (notaAluno > 7) {
            quantidadeFemininoMaiorQue7++;
        }
    }

    if (adicionarNota === "N") {
        condicao = false;
    }
}

console.log(
    "Média geral dos alunos: " +
        notas / (quantidadeMasculino + quantidadeFeminino)
);
console.log(quantidadeMasculino + " homens enviaram as notas.");
console.log(
    quantidadeFemininoMaiorQue7 + " mulheres tiveram notas acima de 7."
);
console.log(maiorNotaHomens + " foi a maior nota entre os homens.");
