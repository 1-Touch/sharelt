const router = require("express").Router();

// Controllers
const { scrapeData } = require("../../controllers/twitter/twitter-scraper");

router.get("/:searchTerm", scrapeData);

module.exports = router;
