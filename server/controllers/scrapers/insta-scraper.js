const person = (req, res) => {
  res.send("this person");
};

const people = (req, res) => {
  res.send("this people");
};

module.exports = { person, people };

// const exec = require('child_process').exec;
// exec('instaloader profile espnmma',['-ltr'],(e, stdout,stderr) => {
//     if (e instanceof Error) {
//         console.error(e);
//         throw e;
//     }
//     console.log('stdout',stdout);
//     console.log('stderr',stderr);
// });
