const model = require('../model/GroupeUsers');
module.exports = {
    query : {
        groupeUser: (_,args,context) =>  model.find(args.id).then(res=>res) ,
        groupeUsers : (_,args,context) => model.findAll().then(res=>res),
    },
    fields: {

    },
    mutation: {
        
    }
}