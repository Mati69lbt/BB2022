const axios = require("axios");
const { Router } = require("express");
const fullCharacter = require("../controllers/fullCharacter");

const router = Router();

router.get("/", async (req, res) => {
  const name = req.query.name;
  let charactersTotal = await fullCharacter();
  try {
    if (name) {
      let characterName = await charactersTotal.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      characterName.length
        ? res.status(200).send(characterName)
        : res.status(400).send("No se encuentra ese personaje");
    } else res.status(200).send(charactersTotal);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
