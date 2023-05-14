'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.pemesanan,{
        foreignKey: "id_customer",
        as: "pemesanan"
      })

    }
  }
  customer.init({
    nama: DataTypes.STRING,
    image: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
  }, {
    sequelize,
    tableName:'customer',
    modelName: 'customer',
  });
  return customer;
};