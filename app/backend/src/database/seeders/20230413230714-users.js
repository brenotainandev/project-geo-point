'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Breno Tainan',
        email: 'breno.tainan@teste.com',
        password: '090245f477d118fde3e5fa4f7c150f1f',
          // senha: breno123
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        name: 'Maria Souza',
        email: 'maria.souza@teste.com',
        password: 'f8461b554d59b3014e8ff5165dc62fac',
          // senha: maria123
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};