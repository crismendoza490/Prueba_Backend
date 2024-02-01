
'use strict';

// import { sequelize } from "../server/Database/sequelizeConnection";
const Paciente = require('../models/paciente')
//import { Paciente } from "./paciente";
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.belongsTo(models.Paciente,{foreignKey: 'IdUser'});
      models.Paciente.hasOne(Usuario,{foreignKey: 'idUser'})
    }
  }

  Usuario.init({
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    }, 
    PhoneNumber: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    UserType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  }, {
    typeof: module,
  });
  return Usuario;
};



// Usuario.belogsTo(Paciente,{
//   foreignkey: 'IdUser',
//   sourcekey: 'idUser'
// })

// Paciente.belogsTo(Usuario,{
//   foreignkey: 'IdUser',
//   sourcekey: 'idUser'
// })
