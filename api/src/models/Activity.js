const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

  sequelize.define('activity', {
    name:{
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.ENUM('1','2','3','4','5')
    },
    duration: {
      type: DataTypes.STRING
    },
    season:{
      type: DataTypes.ENUM('summer','autumn','winter','spring')
    },

  },
  {
    timestamps:false
  });
};
