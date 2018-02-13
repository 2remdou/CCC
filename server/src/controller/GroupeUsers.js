const model = require('../model');
const tableName = 'groupeUser';
const users = require('../model/Users');

console.log(Object.keys(users.attributes));
module.exports = {
    query : {
        groupeUser: (_,args,context) =>  model.find(tableName,args.id).then(res=>res) ,
        groupeUsers : (_,args,context) => model.findAll(tableName).then(res=>res),
    },
    fields: {

    },
    mutation: {

    }
}