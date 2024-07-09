const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');

class Collaboration extends Model {}

Collaboration.init({
    taskId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Collaboration',
    tableName: 'collaboration',
    timestamps: false
});

module.exports = Collaboration;
