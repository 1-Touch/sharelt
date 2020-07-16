const person = (req, res) => {
  res.send("this person");
};

const people = (req, res) => {
  res.send("this people");
};

module.exports = { person, people };
