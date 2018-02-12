const model = require('../model');
const table='users';

module.exports = {
    findAll : () => model.findAll(table),
    find : (id) => model.find(table,id),
    insert : (user) => {
        let statement = `insert into users(nom,prenom,email,telephone,idGroupeUser,password) 
            values($1,$2,$3,$4,$5,$6) returning *
        `;
        return model.db.querySingleRow(statement,[user.nom,user.prenom,user.email,user.telephone,user.groupeUser.id,user.password]);
    }
}