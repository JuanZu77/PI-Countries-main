const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

  sequelize.define('country', {
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    area:{
      type: DataTypes.STRING,
    },
    population:{
      type: DataTypes.INTEGER,
    }
  },
  {
    timestamps:false
  });
};
