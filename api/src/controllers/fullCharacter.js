const getAllCharacters = require("./getCharacters");
const getDeathApi = require("./getDeath");
const getDeathsResponsibleApi = require("./getDeathResponsible");
const getApiQuotes = require("./getQuotes");

const fullCharacter = async () => {
  const apiCharacters = await getAllCharacters();
  const apiQuotes = await getApiQuotes();
  const apiDeath = await getDeathApi();
  const apiDeathResponsible = await getDeathsResponsibleApi();
  const fullCharacters = apiCharacters.concat(
    apiQuotes,
    apiDeath,
    apiDeathResponsible
  );

  // console.log("full:", fullCharacters); si esta el portrayed
  const newObj = {};

  fullCharacters.forEach(
    ({
      name,
      id,
      nickname,
      img,
      portrayed,
      status,
      trabajo,
      birthday,
      ...rest
    }) => {
      newObj[name] = newObj[name] || {
        name,
        id,
        nickname,
        img,
        portrayed,
        birthday,
        trabajo,
        quotes: [],
        deaths_caused: [],
        status,
        cause: [],
        responsible: [],
        last_words: [],
      };
      newObj[name].quotes.push(rest.quotes);
      newObj[name].cause.push(rest.cause);
      newObj[name].responsible.push(rest.responsible);
      newObj[name].last_words.push(rest.last_words);
      newObj[name].deaths_caused.push(rest.deaths_caused);
    }
  );
  // console.log("full:", fullCharacters); si esta el portrayed
  const data = Object.values(newObj);

  const finalData = data.filter((e) => e.status);

  const allfullCharacters = finalData.map((el) => {
    return {
      id: el.id,
      name: el.name,
      nickname: el.nickname,
      img: el.img,
      portrayed: el.portrayed,
      birthday: el.birthday,
      trabajo: el.trabajo,
      quotes: el.quotes.map((el) => el).filter(Boolean),
      deaths_caused: el.deaths_caused.map((el) => el).filter(Boolean),
      status: el.status,
      cause: el.cause
        .map((el) => el)
        .filter(Boolean)
        .toString(),
      responsible: el.responsible
        .map((el) => el)
        .filter(Boolean)
        .toString(),
      last_words: el.last_words
        .map((el) => el)
        .filter(Boolean)
        .toString(),
    };
  });
  return allfullCharacters;
};

module.exports = fullCharacter;
