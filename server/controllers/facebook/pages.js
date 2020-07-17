const { facebook } = require('../../config');
const fetch = require('node-fetch');

/*

Getting the list of pages for use

    GET me/accounts

*/

const pageList = async (req, res) => {
  const { accessToken } = facebook;
  try {
    const result = await fetch(
      `https://graph.facebook.com/v7.0/me?fields=accounts{name,picture{url}}&access_token=${accessToken}`
    );
    const pages = await result.json();
    res.send(pages.accounts.data);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { pageList };
