module.exports = function(app) {

  const skillService = require('../services/skillService');

  // 全技術情報を取得
  app.get('/api/common/skills', skillService.findAll);
  // UserIDから技術情報のリストを取得
  app.get('/api/common/skills/:user_id', skillService.findAllByUserId);
};
