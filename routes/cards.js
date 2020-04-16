const router = require("express").Router();
const cardsCtrl = require("../controllers/cards");

router.delete("/:id", cardsCtrl.delete);
router.put("/:id", cardsCtrl.update);
// router.post("/:id", cardsCtrl.add);

module.exports = router;
