const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//   // const address = 'address';
//   // const delivery = order.order.delivery;
//   // const deliveryPerson = order.order.delivery.deliveryPerson;
//   // const customerName = order['name'];
//   // const customerPhone = order['phoneNumber'];
//   // const street = order[address].street;
//   // const number = order[address].number;
//   // const apartment = order[address].apartment;

//   return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
// }

// customerInfo(order);


const orderModifier = (order) => {
  const newBuyer = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';

  return `Olá ${newBuyer}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${newTotal},00.`;
}

console.log(orderModifier(order));