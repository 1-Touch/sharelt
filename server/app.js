const express = require("express");
const cors = require("cors");

require("dotenv/config");

// Constants
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("in app"));
app.use("/facebook", require("./routes/facebook/pages"));
app.use("/insta-scraper", require("./routes/instagram/insta-scraper"));
app.use("/twitter-scraper", require("./routes/twitter/twitter-scraper"));

// PORT
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
