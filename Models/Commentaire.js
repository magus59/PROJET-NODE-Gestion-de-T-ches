const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');

class Commentaire extends Model {}

Commentaire.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    }
   
}, {
    sequelize,
    modelName: 'Commentaire',
    tableName: 'commentaire',
    timestamps: false
});

module.exports = Commentaire;
