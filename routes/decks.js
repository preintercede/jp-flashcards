const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Successfully logged in");
});

module.exports = router;
