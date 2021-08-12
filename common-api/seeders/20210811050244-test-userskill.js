'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('UserSkills', [
      { user_id: 1,  skill_id: 1, created_at: now, updated_at: now},
      { user_id: 1,  skill_id: 2, created_at: now, updated_at: now},
      { user_id: 2,  skill_id: 3, created_at: now, updated_at: now},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserSkills', null, {});
  }
};
