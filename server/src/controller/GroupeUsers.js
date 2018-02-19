const model = require('../model');
const table = 'groupeUser';

module.exports = {
    query : {
        groupeUser: (_,args,context) =>  model.find(table,args.id).then(res=>res) ,
        groupeUsers : (_,args,context) => model.findAll(table).then(res=>res),
    },
    fields: {

    },
    mutation: {

    }
}