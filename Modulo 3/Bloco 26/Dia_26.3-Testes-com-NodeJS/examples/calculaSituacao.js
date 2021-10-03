function calculaSituacao(media) {
  if (media > 7) {
    return 'aprovado';
  }

  return 'reprovado';
}

// gerado erro de propósito para o teste manual em index.js falhar, quando igual a 7! Para corrigir basta passar o operador de comparação >= no lugar do >.

module.exports = calculaSituacao;