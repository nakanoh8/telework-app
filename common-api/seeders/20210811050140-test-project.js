'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('Projects', [
      { id: 1, project_name: '新規事業開発',  project_no: 10000, chat_system_id: 1, meeting_system_id: 1, created_at: now, updated_at: now},
      { id: 2, project_name: 'ICTストア開発',  project_no: 10001, chat_system_id: 1, meeting_system_id: 1, created_at: now, updated_at: now}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
