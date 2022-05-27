const { Router } = require("express");
const fullCharacter = require("../controllers/fullCharacter");
const router = Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const charactersTotal = await fullCharacter();
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
