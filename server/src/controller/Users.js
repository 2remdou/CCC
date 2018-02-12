const model = require('../model/Users');
const bcrypt = require('bcrypt');
const handleError = require('../Errors/handleError');
module.exports = {
    query : {
        groupeUser: (_,args,context) =>  model.find(args.id).then(res=>res).catch(error=>handleError.db(error)) ,
        groupeUsers : (_,args,context) => model.findAll().then(res=>res).catch(error=>handleError.db(error)),
    },
    fields: {

    },
    mutation: {
        createUser: async (_,{user},context) => {
            user.password = await bcrypt.hash(user.password,12);
            return model.insert(user).then(res=>res).catch(error=>handleError.db(error));
        }
    }
}