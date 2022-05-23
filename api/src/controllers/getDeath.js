const axios = require("axios");

const getDeathApi = async () => {
  const apiDeathURL = await axios.get("https://breakingbadapi.com/api/deaths");
  const apiDeathInfo = await apiDeathURL.data.map((el) => {
    return {
      name: el.death,
      cause: el.cause,
      responsible: el.responsible,
      last_words: el.last_words,
    };
  });
  return apiDeathInfo;
};

module.exports = getDeathApi;
