function descobrirInterruptores() {
    // Simulações dos acionamentos dos interruptores
    const interruptor1 = true; // Primeiro interruptor é ligado
    const interruptor2 = false; // Primeiro interruptor é desligado, segundo é ligado
    const interruptor3 = true; // Terceiro interruptor é ligado

    // Verifica o estado das lâmpadas após as simulações
    const lampada1 = interruptor1 ^ interruptor2;
    const lampada2 = interruptor2 ^ interruptor3;
    const lampada3 = interruptor1 ^ interruptor3;

    // Retorna os resultados
    return [lampada1, lampada2, lampada3];
}

// Chamando a função para descobrir os interruptores
const interruptores = descobrirInterruptores();

// Exibindo o resultado
console.log("Interruptor 1 controla a lâmpada?", interruptores[0] ? "Sim" : "Não");
console.log("Interruptor 2 controla a lâmpada?", interruptores[1] ? "Sim" : "Não");
console.log("Interruptor 3 controla a lâmpada?", interruptores[2] ? "Sim" : "Não");

