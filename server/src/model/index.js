const db = require('../db');
const util = require('../util');

module.exports = {
    findAll : (table) => db.query(`select * from ${table}`),
    find: (table,id) => db.querySingleRow(`select * from ${table} where id=$1`,[id]),
    insert:(value,model) => {
        const newValue = util.prepareForDB(value,model);
        delete newValue['id'];
        let statement = util.generateInsertStatement(model.table,value);
       return db.querySingleRow(statement,Object.values(newValue))
        
    },
    db
}