const { Model, DataTypes } = require("sequelize");
const Tache = require("./Tache"); 
const Utilisateur = require("./Utilisateur"); 
const sequelize = require("../Config/Sequelize");

class Collaboration extends Model {}

Collaboration.init(
  {
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Tache,
        key: "id",
      },
    },
    userId: {
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
    modelName: "Collaboration",
    tableName: "collaboration",
    primaryKey: ["taskId", "userId"],
    timestamps: false,
  }
);

Collaboration.belongsTo(Tache, { foreignKey: "taskId" });
Collaboration.belongsTo(Utilisateur, { foreignKey: "userId" });

module.exports = Collaboration;
