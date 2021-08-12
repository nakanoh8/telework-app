'use strict';

const express = require('express');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
// body-parserを設定する
app.use(express.json())

// Routeのインポート
const userRoutes = require("./routes/userRoutes");
const skillRoutes = require("./routes/skillRoutes");
const organizationRoutes = require("./routes/organizationRoutes");
const projectRoutes = require("./routes/projectRoutes");
const msTeamsAdminAuthtokenRoutes = require("./routes/msTeamsAdminAuthtokenRoutes");
const msTeamsProjectRoutes = require("./routes/msTeamsProjectRoutes");
//appにRouteを設定する
userRoutes(app);
skillRoutes(app);
organizationRoutes(app);
projectRoutes(app);
msTeamsAdminAuthtokenRoutes(app);
msTeamsProjectRoutes(app);

app.get('/', (req, res) => {
  res.send('Hba360 Common Api');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
