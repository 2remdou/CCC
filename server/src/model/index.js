const db = require('../db');
const util = require('../util');

module.exports = {
    findAll : async (table) => await db.query(`select * from ${table}`),
    find: async (table,id) => await db.querySingleRow(`select * from ${table} where id=$1`,[id]),
    insert:(value,model) => {
        const newValue = util.hydrate(value,model);
        delete newValue['id'];
        let statement = `insert into ${model.table}${util.mettreEntreParenthese(Object.keys(newValue))} 
            values${util.mettreEntreParentheseAvecQuote(Object.values(newValue))};
        `
    },
    db
}