const axios = require("axios");

const { Ocupa, Character } = require("../db");
const getApiQuotes = require("./getQuotes");

const getApiInfo = async () => {
  const AQ = await getApiQuotes();

  const apiurl = await axios.get("https://breakingbadapi.com/api/characters");
  const apiInfo = await apiurl.data.map((el) => {
    return {
      name: el.name,
      id: el.char_id,
      birthday: el.birthday,
      img: el.img,
      status: el.status,
      nickname: el.nickname,
      portrayed: el.portrayed,
      trabajo: el.occupation.map((el) => el),
    };
  });

  return apiInfo;
};

const getdbInfo = async () => {
  return await Character.findAll({
    include: {
      model: Ocupa,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllCharacters = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getdbInfo();
  console.log(dbInfo);
  const infoTotal = dbInfo.concat(apiInfo);
  return infoTotal;
};

module.exports = getAllCharacters;
