const axios = require("axios");
const { Router } = require("express");
const { Ocupa, Character } = require("../db");

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
    laburo,
  } = req.body;

  const createdCharacter = await Character.create({
    name,
    nickname,
    birthday,
    img,
    portrayed,
    status,
    createdInDb,
  });

  const createdDb = await Ocupa.findAll({
    where: {
      name: laburo,
    },
  });
  try {
    createdCharacter.addOcupa(createdDb);
    res.status(200).send("Personaje Creado con mucho Exito!");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
