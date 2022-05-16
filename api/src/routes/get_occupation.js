const axios = require("axios");

const { Router } = require("express");

const getAllCharacters = require("../controllers/getCharacters");
const { Ocupa, Character } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  const occupationsApi = await axios.get(
    "https://breakingbadapi.com/api/characters"
  );

  const occupations = occupationsApi.data.map((el) => el.occupation);
  const occEach = occupations.map((el) => {
    for (let i = 0; i < el.length; i++) return el[i];
    // console.log(occEach);
  });

  occEach.forEach((el) => {
    Ocupa.findOrCreate({
      where: { name: el },
    });
  });

  const allOccupations = await Ocupa.findAll();
  res.send(allOccupations);
});

module.exports = router;
