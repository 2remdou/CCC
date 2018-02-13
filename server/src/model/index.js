const db = require('../db');

module.exports = {
    findAll : async (table) => await db.query(`select * from ${table}`),
    find: async (table,id) => await db.querySingleRow(`select * from ${table} where id=$1`,[id]),
    insert:(model,value) => {

    },
    db
}