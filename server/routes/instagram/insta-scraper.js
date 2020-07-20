const router = require("express").Router();

// Controllers
const { scrapeData } = require("../../controllers/instagram/insta-scraper");

router.get("/:searchTerm", scrapeData);

module.exports = router;
