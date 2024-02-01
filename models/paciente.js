'use strict';
const Usuario = require('../models/usuario');
const {
  Model
} = require('sequelize');
const usuario = require('./usuario');
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Paciente.belongsTo(models.Usuario,{
      //   as: 'pacientes',
      //   foreignKey: 'IdUser'
      // })
    }
  }
  Paciente.init({
    idPaciente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    OwnerName: DataTypes.STRING,
    TypeAnimal: DataTypes.STRING,
    IdUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Paciente',
  });
  return Paciente;
};