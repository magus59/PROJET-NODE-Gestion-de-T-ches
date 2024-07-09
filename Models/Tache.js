const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');

class Tache extends Model {}

Tache.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
   
}, {
    sequelize,
    modelName: 'Tache',
    tableName: 'tâche',
    timestamps: false
});

module.exports = Tache;
