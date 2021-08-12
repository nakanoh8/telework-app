module.exports = {
  // 質問用チャネル初期化
  initQuestionpostChannel(req, res) {
    // token更新
    // 新規チャネル作成（GraphAPI）
    // 新規チャネルにメンバを追加（GraphAPI）
    // 新規チャネルに質問内容を投稿（GraphAPI）
    // 実行結果を返す
  },
  // 質問用チャネルメンバ追加
  // addQuestionpostChannelMembers(req, res) {
  // },
  // 質問用チャネルメッセージ投稿
  // postQuestionpostChannelMsg(req, res) {
  // },
  // チャネルURL取得
  getProjectChannelUrl(req, res) {
    // DBからプロジェクトに紐づいたチャネルURLを取得して返す
  },
  // 通話開始
  call(req, res) {
    // token更新
    // DBからユーザに紐づいたTeamsメンバIDを取得
    // TeamsメンバIDを指定してTeams通話開始（GraphAPI）を実行
  }
}
