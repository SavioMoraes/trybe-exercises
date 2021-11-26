'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const StoresTable = queryInterface.createTable('Stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        prmeryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: null,
        type: Sequelize.STRING,
      },
    });

    return StoresTable ;
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
