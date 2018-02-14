const model = require('../model');
const Joi = require('joi');
const util = require('../util');
const diff = require('lodash/fp/difference');
const table='users';

module.exports = {   
    table,
    findAll : () => model.findAll(table),
    find : (id) => model.find(table,id),
    constraint :{
        id: Joi.string(),
        nom: Joi.string().required().label('Le nom'),
        prenom: Joi.string().label('Le nom'),
        telephone: Joi.string().required().label('Le telephone'),
        email: Joi.string().email().label("L'email"),
        idGroupeUser: Joi.string().required().label("Le groupe d'utilisateur"),
        password: Joi.string().required().label("Le mot de passe")
    },
    relations:['groupeUser'],
    insert : (user) => {
        let statement = `insert into users(nom,prenom,email,telephone,idGroupeUser,password) 
            values($1,$2,$3,$4,$5,$6) returning *
        `;
        return model.db.querySingleRow(statement,[user.nom,user.prenom,user.email,user.telephone,user.groupeUser.id,user.password]);
    }
}