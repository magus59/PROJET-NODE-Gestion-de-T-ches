const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");
const Utilisateur = require("./Utilisateur"); 

class Tache extends Model {}

Tache.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Utilisateur,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Tache",
    tableName: "tâche",
    timestamps: false,
  }
);

Tache.belongsTo(Utilisateur, { as: "owner", foreignKey: "ownerId" });

module.exports = Tache;
