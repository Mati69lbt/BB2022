const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const routeAllcharacters = require("./get_characters");
const routeAlloccupations = require("../routes/get_occupation");
const routeCreateCharacter = require("./post_character");
const routeCharacterId = require("./get_charID");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/characters", routeAllcharacters);
router.use("/occupations", routeAlloccupations);
router.use("/character", routeCreateCharacter);
router.use("/characters", routeCharacterId);

module.exports = router;
