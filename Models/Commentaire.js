const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");
const Tache = require("./Tache"); 
const Utilisateur = require("./Utilisateur"); 

class Commentaire extends Model {}

Commentaire.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
    modelName: "Commentaire",
    tableName: "commentaire",
    timestamps: false,
  }
);

Commentaire.belongsTo(Tache, { foreignKey: "taskId" });
Commentaire.belongsTo(Utilisateur, { foreignKey: "userId" });

module.exports = Commentaire;
