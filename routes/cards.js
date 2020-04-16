const router = require("express").Router();
const cardsCtrl = require("../controllers/cards");

router.delete("/:id", cardsCtrl.delete);
router.put("/:id", cardsCtrl.update);

module.exports = router;
