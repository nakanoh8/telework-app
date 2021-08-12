'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('UserProjects', [
      { user_id: 1,  project_id: 1, is_manager: true, created_at: now, updated_at: now},
      { user_id: 1,  project_id: 2, is_manager: false, created_at: now, updated_at: now},
      { user_id: 2,  project_id: 1, is_manager: false, created_at: now, updated_at: now},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserProjects', null, {});
  }
};
