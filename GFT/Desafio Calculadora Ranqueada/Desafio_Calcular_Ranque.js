function calcularRanque(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Variável para armazenar o nível
    let nivel;

    // Estrutura de decisão switch case para determinar o nível
    switch (true) {
        case (vitorias < 10):
            nivel = "Ferro";
            break;
        case (vitorias >= 11 && vitorias <= 20):
            nivel = "Bronze";
            break;
        case (vitorias >= 21 && vitorias <= 50):
            nivel = "Prata";
            break;
        case (vitorias >= 51 && vitorias <= 80):
            nivel = "Ouro";
            break;
        case (vitorias >= 81 && vitorias <= 90):
            nivel = "Diamante";
            break;
        case (vitorias >= 91 && vitorias <= 100):
            nivel = "Lendário";
            break;
        case (vitorias >= 101):
            nivel = "Imortal";
            break;
        default:
            nivel = "Desconhecido"; // Para garantir que sempre haja um nível
    }

    // Retorna a mensagem final
    return `O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Exemplo de uso
const resultado = calcularRanque(85, 10);
console.log(resultado);