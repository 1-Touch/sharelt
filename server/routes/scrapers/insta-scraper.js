const router = require("express").Router();

// Controllers
const { people, person } = require("../../controllers/scrapers/insta-scraper");

router.get("/person", person);
router.get("/people", people);

module.exports = router;
