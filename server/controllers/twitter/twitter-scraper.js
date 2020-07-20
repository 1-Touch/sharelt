const { execSync } = require("child_process");

const scrapeData = (req, res) => {
  const { searchTerm } = req.params;
  const scrapedFile = searchTerm + ".json";
  console.log(scrapedFile);
  const execSync = require("child_process").execSync;
  execSync(
    `twint -u ${searchTerm} -o ${scrapedFile} --json`,
    ["-ltr"],
    (e, stdout, stderr) => {
      if (e instanceof Error) {
        console.error(e);
        throw e;
      }
      console.log("Twitter-scraper running....", stdout);
      console.log("stderr", stderr);
    }
  );
  res.send("Data has been scraped successfully");
};

module.exports = { scrapeData };
