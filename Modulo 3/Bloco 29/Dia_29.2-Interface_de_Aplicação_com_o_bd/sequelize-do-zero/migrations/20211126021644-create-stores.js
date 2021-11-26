'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const StoresTable = await queryInterface.createTable('Stores', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    return StoresTable;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Stores');
  }
};
