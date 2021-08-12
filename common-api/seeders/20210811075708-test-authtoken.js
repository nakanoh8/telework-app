'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('MsTeamsAdminAuthtokens', [
      { id: 1, msteams_accesstoken: 'accesstoken', msteams_refreshtoken: 'refreshtoken', created_at: now, updated_at: now},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MsTeamsAdminAuthtokens', null, {});
  }
};
