/*Dentro de função nem var, nem let, nem const vazam do escopo*/
function userInfo() {
  // let userEmail = 'maria@email.com';
  // var userEmail = 'maria@email.com';
  const userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();
// console.log(userEmail);

/*Dentro de if, for...o var vaz para fora do escopo, o let e o const não vazam*/
if (true) {
  // inicio do escopo do if
  var userAge = "20";
  // let userAge = "20";
  // const userAge = "20";
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

/*var sobrescreve, let e const não */
var userName = "Isabella";
var userName = "Lucas";
// let userName = "Isabella";
// let userName = "Lucas";
// const userName = "Isabella";
// const userName = "Lucas";
console.log(userName); // Resultado: Lucas

/*portanto, não utilizar mais o var, utilizar o const para constantes, variáveis cujo valor não poderá ser alteradoe let para as variáveis cujo valor poder'ser alterado*/
const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // Facial recognition

/*permittido alterar as propriedades de um objeto, mas não reatribuir um novo objeto*/
const userInfo = {
  name: "Cláudio",
  id: "5489-2",
  email: "claudio@email.com"
};
userInfo.name = "João"

// userInfo = {
//   name: "João",
//   id: "5489-2",
//   email: "claudio@email.com"
// }

console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }

/*Aplicando o mesmo raciocínio de objeto em um array*/
const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro