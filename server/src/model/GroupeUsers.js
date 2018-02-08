const model = require('../model');
const table='groupeUsers';

module.exports = {
    findAll : () => model.findAll(table),
    find : (id) => model.find(table,id)
}