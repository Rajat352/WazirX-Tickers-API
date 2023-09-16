const express = require("express");
const router = express.Router();
const tickerController = require("../controllers/tickerController");

router.get("/", tickerController.putTickers);
router.get("/tickers", tickerController.getTickers);

module.exports = router;
