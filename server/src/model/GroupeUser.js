const table='groupeUser';
const { sequelize } = require('../db')
const { DataTypes } = require('sequelize');

const name='groupeUser';

module.exports = (sequelize,DataTypes) => ({
    entity : sequelize.define(name,{
        id: DataTypes.UUID,
        libelle: {
            type: DataTypes.STRING,
            validate: {
                notNull:{msg: 'Le libelle est obligatoire'}
            }
        }
    })
});