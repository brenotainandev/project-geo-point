'use strict';
module.exports = {
  /**
   * @param {import('sequelize').queryInterface } queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      displayName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },    
      password: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};