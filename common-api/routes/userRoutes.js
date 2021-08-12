module.exports = function(app) {

  const userService = require('../services/userService');

  // IDからユーザ情報を取得
  app.get('/api/common/users/:id', userService.findByPk);
  // IDのリストからユーザ情報のリストを取得
  app.post('/api/common/users/ids', userService.findAllById);
  // 全ユーザ情報のリストを取得
  app.get('/api/common/users', userService.findAll);
  // ProjectIDからユーザ情報のリストを取得する（プロジェクトメンバ状態一覧表示用）
  // app.get('/api/common/users/:project_id', userService.findAllByProjectId);
  // SkillID・OrganizationIDのリストからユーザ情報のリストを取得する（回答者検索用）
  // app.post('/api/common/users/details', userService.findAllBySkillIdAndOrgId);
};
