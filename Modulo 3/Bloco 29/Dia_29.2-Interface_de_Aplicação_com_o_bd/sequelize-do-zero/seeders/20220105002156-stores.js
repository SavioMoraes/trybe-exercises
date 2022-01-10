'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Stores', [
      {
        name: 'Magazne',
        description: 'Loja que tem eletros.'
      },
      {
        name: 'Tem de tudo',
        description: 'Pode vir que aqui tem tudo.'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Stores', null, {});
  }
};
