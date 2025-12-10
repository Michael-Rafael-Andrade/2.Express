const {DataTypes, Model} = require('sequelize');
const sequelize = require('./server.js');

class Nota extends Model { } // classe herdando de 'Model'

Nota.init( // construtor com a definição dos atributos 
    {
        // substituindo o atributo 'chave'
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        titulo: { type: DataTypes.STRING, unique: true, allowNull: false },
        texto: { type: DataTypes.TEXT, allowNull: false },
        importancia: { type: DataTypes.INTEGER, allowNull: false },
        lida: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {   // configurações adicionais do modelo
        sequelize, // para estabelecer conexão com BD
        freezeTableName: true, // nome da tabela igual ao nome da classe
        createdAt: 'criada_em', // nome do atributo 'createdAt'
        updatedAt: 'atualiza_em', // nome do atributo 'updatedAt'
    },
);

module.exports = Nota;