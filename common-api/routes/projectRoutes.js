module.exports = function(app) {

  const projectService = require('../services/projectService');

  // UserIDからプロジェクト情報のリストを取得
  app.get('/api/common/projects/:user_id', projectService.findAllByUserId);
};
