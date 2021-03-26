let valorCusto = 100;
let valorVenda = 200;
let impostoSobreOCusto = valorCusto * 0.2;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;
console.log('O valor do lucro é: ' + lucro + '.');
let lucroTotal = lucro * 1000;
console.log('O lucro com a venda de mil unidades é: ' + lucroTotal + '.')