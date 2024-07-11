const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");

class Utilisateur extends Model {}

Utilisateur.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: "Utilisateur",
    tableName: "utilisateur",
    timestamps: false,
  }
);

module.exports = Utilisateur;
