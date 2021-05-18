const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// console.log(product.name);
// console.log(product['name']);
// console.log(product.price);
// console.log(product.seller);

//--------------------------------------------------------------------------

// const { name } = product;
// console.log(name); // Smart TV Crystal UHD

//--------------------------------------------------------------------------

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

//--------------------------------------------------------------------------

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject, d: address } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática
console.log(address); // undefined -- OK!

//--------------------------------------------------------------------------

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };
// const name = student.a;
// console.log(name); // Maria

//---------------------------------------------------------------------------

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
