module.exports = function(app) {

  const msTeamsProjectService = require('../services/msTeamsProjectService');

  // ProjectIDからTeamsプロジェクト情報を取得
  app.get('/api/common/msTeamsProjects/:project_id', msTeamsProjectService.findOneByProjectId);
};
