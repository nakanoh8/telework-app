const db = require('../models/index.js');
const MsTeamsAdminAuthtoken = db.MsTeamsAdminAuthtoken;

module.exports = {
  // IDからデータをMsTeams管理者トークン情報を取得
  findByPk(req, res) {
    MsTeamsAdminAuthtoken.findByPk(req.params.id)
    .then(msTeamsAdminAuthtoken => {
      res.send(msTeamsAdminAuthtoken);
    })
    .catch(err => {
      console.log(err)
    });
  },
  // MsTeams管理者トークン情報を更新
  update(req, res) {
    MsTeamsAdminAuthtoken.update(
      {
        msteams_accesstoken: req.body.msteams_accesstoken,
        msteams_refreshtoken: req.body.msteams_refreshtoken
      }, {
        where: { id: req.params.id }
      }
    ).then(() => {
        res.status(200).send("Successfully updated a MsTeamsAdminAuthtoken.");
    });
  },
}
