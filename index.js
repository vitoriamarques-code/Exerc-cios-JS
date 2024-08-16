// Função MAIOR_MENOR
function maiorMenor() {
    const valores = document.getElementById('valores-maior-menor').value.split(',').map(Number);
    const maior = Math.max(...valores);
    const menor = Math.min(...valores);
    document.getElementById('resultado-maior-menor').textContent = `Maior valor: ${maior}, Menor valor: ${menor}`;
}

// Função VOGAL
function vogal() {
    const c = document.getElementById('caractere-vogal').value.toLowerCase();
    const resultado = ['a', 'e', 'i', 'o', 'u'].includes(c) ? 1 : 0;
    document.getElementById('resultado-vogal').textContent = resultado === 1 ? 'É uma vogal.' : 'Não é uma vogal.';
}

// Função LIMITES
function limites() {
    const li = parseInt(document.getElementById('limite-inferior').value);
    const ls = parseInt(document.getElementById('limite-superior').value);
    let soma = 0;
    let pares = [];

    for (let i = li + 1; i < ls; i++) {
        if (i % 2 === 0) {
            pares.push(i);
            soma += i;
        }
    }

    document.getElementById('resultado-limites').textContent = `Números pares: ${pares.join(', ')}, Somatório: ${soma}`;
}

// Função ORDEM
function ordem() {
    const valores = document.getElementById('valores-ordem').value.split(',').map(Number);
    valores.sort((a, b) => a - b);
    document.getElementById('resultado-ordem').textContent = `Valores ordenados: ${valores.join(', ')}`;
}

// Função POSITIVO_NEGATIVO
function positivoNegativo() {
    const x = parseInt(document.getElementById('valor-positivo-negativo').value);
    const resultado = x >= 0;
    document.getElementById('resultado-positivo-negativo').textContent = resultado ? 'Positivo' : 'Negativo';
}

// Função PAR_IMPAR
function parImpar() {
    const x = parseInt(document.getElementById('valor-par-impar').value);
    const resultado = x % 2 === 0;
    document.getElementById('resultado-par-impar').textContent = resultado ? 'Par' : 'Ímpar';
}

