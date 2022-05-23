const axios = require("axios");

const getDeathsResponsibleApi = async () => {
  const apiUrl = await axios.get("https://breakingbadapi.com/api/deaths");
  const apiDeathResponsible = await apiUrl.data.map((el) => {
    return {
      name: el.responsible,
      deaths_caused: el.death,
    };
  });
  return apiDeathResponsible;
};
module.exports = getDeathsResponsibleApi;
