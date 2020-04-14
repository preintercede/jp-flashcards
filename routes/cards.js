const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Cards page");
});

module.exports = router;
