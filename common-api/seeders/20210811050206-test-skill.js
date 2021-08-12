'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('Skills', [
      { id: 1, skill_name: 'Python',  created_at: now, updated_at: now},
      { id: 2, skill_name: '機械学習',  created_at: now, updated_at: now},
      { id: 3, skill_name: 'VR',  created_at: now, updated_at: now},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Skills', null, {});
  }
};
