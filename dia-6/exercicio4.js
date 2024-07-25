let num = Number(prompt("Insira um numero:"))

for (let i = num; i <= num + 2; i++) {
    console.log("tabuada do " + i)
    for (let tab = 1; tab <= 10; tab++) {
        console.log(i + " x " + tab + " = " + tab * i)
    }
}