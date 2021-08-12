module.exports = function(app) {

  const microsoftteamsService = require('../services/microsoftteamsService');

  // 質問用チャネル初期化
  app.post('/api/microsoftteams/questionpost/channel/init', microsoftteamsService.initQuestionpostChannel);
  // 質問用チャネルメンバ追加
  // app.post('/api/microsoftteams/questionpost/channel/members', microsoftteamsService.addQuestionpostChannelMembers);
  // 質問用チャネルメッセージ投稿
  // app.post('/api/microsoftteams/questionpost/channel/message', microsoftteamsService.postQuestionpostChannelMsg);
  // チャネルURL取得
  app.get('/api/microsoftteams/project/channel/url/:project_id', microsoftteamsService.getProjectChannelUrl);
  // 通話開始
  app.post('/api/microsoftteams/call', microsoftteamsService.call);
  // 個人チャットURL取得
  // 会議URL取得
};
