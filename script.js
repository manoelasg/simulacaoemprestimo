// Exercício de Simulação de Empréstimo
// Regras:
// 1. O cliente deve ter idade entre 22 e 55 anos;
// 2. O valor do empréstimo deve ser no mínimo 1000 reais;
// 3. O valor do empréstimo não pode passar de 15% da renda mensal do cliente;
// 4. O número de parcelas escolhidas pelo cliente deve estar entre 3 e 20;
// 5. Serão cobrados juros de 8% (composto).
// Resposta deve ser o valor total do empréstimo e o valor de cada parcela.

let nome = prompt("Qual o seu nome?").replace(/^\s+|\s+$/g, "");
console.log(`nome: ${nome}`);
while (nome === "" || nome === null){
    nome = prompt('Por favor, digite seu nome.').replace(/^\s+|\s+$/g, "");
    console.log(`nome: ${nome}`);
}
let confirmacao = confirm(`Olá, ${nome}. Você gostaria de simular um empréstimo?\nSe sim, pressione "OK". Se não, cancele.`);

if (confirmacao) {
    let idade = prompt(`Qual a sua idade, ${nome}?\nPor favor, digite apenas o número correspondente.`);
    console.log(`idade: ${idade}`);
    while (isNaN(idade) || idade === "") {
        alert(`${nome}, digite um número válido, por favor.`);
        idade = prompt(`Insira novamente a sua idade.\nPor favor, digite apenas o número correspondente.`);
        console.log(`idade: ${idade}`);
    }
    if (idade > 21 && idade < 56) {
        let renda = prompt(`Qual a sua renda mensal, ${nome}?\nPor favor, digite apenas o número correspondente.`);
        console.log(`renda: ${renda}`);
        while (isNaN(renda) || renda === "") {
            alert(`${nome}, digite um número válido, por favor.`);
            renda = prompt(`Insira novamente a sua renda.\nPor favor, digite apenas o número correspondente.`);
            console.log(`renda: ${renda}`);
        }
        let emprestimo = prompt(`Quanto você gostaria de pedir emprestado, ${nome}?\nPor favor, digite apenas o número correspondente.`);
        console.log(`emprestimo: ${emprestimo}`);
        while (isNaN(emprestimo) || emprestimo === "") {
            alert(`${nome}, digite um número válido, por favor.`);
            emprestimo = prompt(`Insira novamente o valor do empréstimo desejado.\nPor favor, digite apenas o número correspondente.`);
            console.log(`emprestimo: ${emprestimo}`);
        }
        if (emprestimo < 1000 || emprestimo > 0.15*renda) {
            alert(`Desculpe, ${nome}. Você não pode realizar um empréstimo conosco.`);
        } else {
            alert(`Parabéns, ${nome}. Sua simulação foi aceita!`);
            let qtdeParcelas = prompt(`Em quantas parcelas você gostaria de pagar, ${nome}?\nAceitamos parcelamentos de 3 à 20 vezes.\nPor favor, digite apenas o número correspondente.`);
            console.log(`qtdeParcelas: ${qtdeParcelas}`);
            while (isNaN(qtdeParcelas) || qtdeParcelas === "" || qtdeParcelas < 3 || qtdeParcelas > 20) {
                alert(`${nome}, digite um número válido, por favor.`);
                qtdeParcelas = prompt(`Insira novamente a quantidade de parcelas desejada.\nAceitamos parcelamentos de 3 à 20 vezes.\nPor favor, digite apenas o número correspondente.`);
                console.log(`qtdeParcelas: ${qtdeParcelas}`);
            }
            let parcelas = [];
            console.log(parcelas);
            parcelas.length = qtdeParcelas;
            console.log(parcelas);
        }
    } else {
        alert(`Desculpe, ${nome}. Você não pode realizar um empréstimo conosco.`);
    }
} else {
    alert(`Obrigada pela visita, ${nome}. Volte quando mudar de ideia.`);
}
