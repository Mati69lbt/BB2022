const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const death = (sequelize) => {
  // defino el modelo
  sequelize.define("deaths", {
    death: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cause: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responsible: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calast_wordsuse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = death;
