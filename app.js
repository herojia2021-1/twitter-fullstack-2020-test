const express = require("express")
const helpers = require("./_helpers")//加回去給你

const app = express()
const port = 3000

// use helpers.getUser(req) to replace req.user
// use helpers.ensureAuthenticated(req) to replace req.isAuthenticated() tests test

app.get("/", (req, res) => res.send("Hello World!"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
