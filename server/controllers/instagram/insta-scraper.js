const { execSync } = require("child_process");

const scrapeData = (req, res) => {
  const { searchTerm } = req.params;
  const execSync = require("child_process").execSync;
  execSync(
    `instaloader profile ${searchTerm} --dirname-pattern "/home/the_goodfella/Scraped Data/Test/instagram/${searchTerm}"`,
    ["-ltr"],
    (e, stdout, stderr) => {
      if (e instanceof Error) {
        console.error(e);
        throw e;
      }
      console.log("Insta-scraper running....", stdout);
      console.log("stderr", stderr);
    }
  );
  res.send("Data has been scraped successfully");
};

module.exports = { scrapeData };
