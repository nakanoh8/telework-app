const db = require('../models/index.js');
const UserProjectConfig = db.UserProjectConfig;

module.exports = {
  findAll(req, res) {
    UserProjectConfig.findAll({
      where: {
        project_id: req.params.project_id
      }
    })
    .then(configs => {
      res.send(configs);
    })
    .catch(err => {
      console.log(err)
    });
  }
}
