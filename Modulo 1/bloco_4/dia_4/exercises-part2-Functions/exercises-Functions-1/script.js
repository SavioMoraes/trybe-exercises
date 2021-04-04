/*
  Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
  Exemplo de palíndromo: arara .
  verificaPalindrome('arara') ;
  Retorno esperado: true
  verificaPalindrome('desenvolvimento') ;
  Retorno esperado: false
*/

/*
  As duas soluções a seguir foram retiradas de: `https://stackoverflow.com/questions/14813369/palindrome-check-in-javascript`
*/

function checkPalindrome(str) {
  return str == str.split('').reverse().join('');
}
console.log(checkPalindrome('arara'));
console.log(checkPalindrome('desenvolvimento'));

function isPalindrome(s,i) {
  return (i = i||0) < 0 || i >= s.length >> 1 || s[i] == s[s.length-1-i] && isPalindrome(s, ++i);
}
console.log(isPalindrome('arara'));
console.log(isPalindrome('desenvolvimento'));