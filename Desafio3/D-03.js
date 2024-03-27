/*3) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___
b) 2, 4, 8, 16, 32, 64, ____
c) 0, 1, 4, 9, 16, 25, 36, ____
d) 4, 16, 36, 64, ____
e) 1, 1, 2, 3, 5, 8, ____

*/

//a) 1, 3, 5, 7, ___
const A = [1,3,5,7]
const proximoElemento = A[A.length - 1] + 2
console.log(`O próximo elemento da sequência (A) é: ${proximoElemento}`);

//b) 2, 4, 8, 16, 32, 64, ____
const B = [2, 4, 8, 16, 32, 64]
const elementoB = B[B.length - 1 ] * 2
console.log(`O próximo elemento da sequência (B) é: ${elementoB}`);

//c) 0, 1, 4, 9, 16, 25, 36, ____
const C = [0, 1, 4, 9, 16, 25, 36]
const proximoC = C.push()
console.log(`O proximo número da sequencia  (C) é ${proximoC*proximoC}`)

//d) 4, 16, 36, 64, ____
let sequencia__D = [];
let limite = 10; // Defina o limite conforme necessário

for (let i = 2; i <= limite; i += 2) {
    sequencia__D.push(i);
    proximo_ = sequencia__D[sequencia__D.length - 1]
    proximoElemento__D = Math.pow(proximo_,2)

}
console.log(`O proximo número da sequencia  (D) é ${proximoElemento__D}`)


// e) 1, 1, 2, 3, 5, 8, ____
function fibonacci (n){
    let array = [0,1];

    for (let i = 2; i < n; i++) {
        let proximoElemento = array[i-1] + array[i-2];
        array.push(proximoElemento)               
    }
    return array;
} 
let fibonacciArray = fibonacci(10)
console.log(`O proximo número da sequencia  (E) é ${fibonacciArray[fibonacciArray.length -1]}`)


