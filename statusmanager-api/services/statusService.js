const db = require('../models/index.js');
const Status = db.Status;

module.exports = {
  // プロジェクトメンバ状態情報を登録
  create(ws, status) {
    Status.create({
      user_id: status.user_id,
      project_id: status.project_id,
      status_no: status.status_no,
      message_content: status.message_content,
    }).then(result => {
      const res = JSON.stringify({
        type: 'post-status',
        payload: JSON.stringify(result)
      });
      ws.send(res);
    })
    .catch(err => {
      console.log(err)
    });
  },
  // ProjectIDからプロジェクトメンバ状態情報のリストを取得
  findAll(req, res) {
    Status.findAll({
      where: {
        user_id: req.params.project_id
      }
    })
    .then(statuses => {
      res.send(statuses);
    })
    .catch(err => {
      console.log(err)
    });
  }
}
