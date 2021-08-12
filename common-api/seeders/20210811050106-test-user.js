'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('Users', [
      { id: 1, user_name: '田中 太郎',  user_no: '0001', is_enabled: true, created_at: now, updated_at: now},
      { id: 2, user_name: '鈴木 一郎',  user_no: '0002', is_enabled: true, created_at: now, updated_at: now},
      { id: 3, user_name: '佐藤 次郎',  user_no: '0003', is_enabled: true, created_at: now, updated_at: now},
      { id: 4, user_name: '吉田 三郎',  user_no: '0004', is_enabled: true, created_at: now, updated_at: now},
      { id: 5, user_name: '中田 四郎',  user_no: '0005', is_enabled: true, created_at: now, updated_at: now},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
