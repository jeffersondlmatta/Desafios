/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/


// DIGITE AQUI O VALOR DESEJADO 
const valor = 15


//funcao calcula a sequencia da fibonacci 
function fibonacci(num){
    let sequencia = [0, 1];

    if (num === 1 ){
        return[0];
    }else if ( num < 1 ){
        return "Valor invalido"
    }

    for (let i = 2; i < num; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }
    return sequencia

}

const lista = fibonacci(valor)

// condicao do valor 
if (lista.includes(valor)){
    console.log(`O valor ${valor} pertence a FINONACCI `)
} else {
    console.log(` O valor ${valor} não pertence a FIBONACCI`)
}




