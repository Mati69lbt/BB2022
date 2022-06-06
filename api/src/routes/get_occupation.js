const axios = require("axios");

const { Router } = require("express");
const fullCharacter = require("../controllers/fullCharacter");

const { Occupation, Character } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  // let occDB = await Occupation.findAll();
  // if (occDB.length === 0) {
  //   const characterTotal = await fullCharacter();
  //   const aux = characterTotal.map((el) => el.occupations);
  //   let occAPi = [];
  //   for (let i = 0; i < aux.length; i++) {
  //     for (let j = 0; j < aux[i].length; j++) {
  //       occAPi.push(aux[i][j]);
  //     }
  //   }
  //   occAPi = occAPi.filter((el, i) => {
  //     return occAPi.indexOf(el) === i;
  //   });
  //   occAPi.forEach((el) => {
  //     Occupation.findOrCreate({
  //       where: { name: el },
  //     });
  //   });
  //   occAPi = await Occupation.findAll();
  // }
  // res.send(occAPi);

  const occupationsApi = await axios.get(
    "https://breakingbadapi.com/api/characters"
  );

  const occupations = occupationsApi.data.map((el) => el.occupation);
  const occEach = occupations.map((el) => {
    for (let i = 0; i < el.length; i++) return el[i];
  });

  occEach.forEach((el) => {
    Occupation.findOrCreate({
      where: { name: el },
    });
  });

  const allOccupations = await Occupation.findAll();
  res.send(allOccupations);
});

module.exports = router;
