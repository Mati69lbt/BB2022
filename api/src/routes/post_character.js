const axios = require("axios");
const { Router } = require("express");
const { Occupation, Character } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  let {
    name,
    nickname,
    birthday,
    img,
    portrayed,
    status,
    createdInDb,
    occupations,
    quotes,
  } = req.body;

  const createdCharacter = await Character.create({
    name,
    nickname,
    birthday,
    img,
    portrayed,
    status,
    createdInDb,
    quotes,
  });

  let createdDb = await Occupation.findAll({
    where: {
      name: occupations,
    },
  });
  console.log(createdDb);
  try {
    createdCharacter.addOccupation(createdDb);
    res.status(200).send(createdCharacter);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
