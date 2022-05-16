const { Router } = require("express");
const getAllCharacters = require("../controllers/getCharacters");
const router = Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const charactersTotal = await getAllCharacters();
  if (id) {
    let characterId = await charactersTotal.filter((el) => el.id == id);
    try {
      characterId.length
        ? res.status(200).json(characterId)
        : res.status(404).send("El Personaje no esta!");
    } catch (error) {
      console.log(error);
    }
  }
});

module.exports = router;
