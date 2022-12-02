"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Flor extends sequelize_1.Model {
        static associate(models) {
            //No hay relacioneees
        }
    }
    Flor.init({
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        SepalLengthCm: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        SepalWidthCm: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        PetalLengthCm: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        PetalWidthCm: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        Species: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Flor'
    });
    return Flor;
};
//# sourceMappingURL=flor.js.map