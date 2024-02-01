'use strict';
const Usuario = require('../models/usuario')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veterinario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Veterinario.belongsTo(models.Usuario,{
      //   as: 'Veterinarios',
      //   foreignKey: 'IdUser'
      // })
    }
  }
  Veterinario.init({
    idVet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    VetName: DataTypes.STRING,
    Address: DataTypes.STRING,
    Id_User: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Veterinario',
  });
  return Veterinario;
};