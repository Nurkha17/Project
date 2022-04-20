const express = require("express");
const router = express.Router();
const path = require('path');
router
    .route("/")
    .get((req, res) => res.sendFile(path.resolve('/main.html')));
module.exports = router;