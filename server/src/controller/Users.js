const model = require('../model');
const modelUser = require('../model/Users');
const bcrypt = require('bcrypt');
const table = 'users';
const handleError = require('../Errors/handleError');
module.exports = {
    query : {
        user: (_,args,context) =>  model.find(table,args.id).then(user=>user).catch(error=>handleError.db(error)) ,
        Users : (_,args,context) => model.findAll(table).then(users=>users).catch(error=>handleError.db(error)),
    },
    fields: {

    },
    mutation: {
        createUser: async (_,{user},context) => {
            user.password = await bcrypt.hash(user.password,12);
            return model.insert(user,modelUser).then(user=>user).catch(error=>handleError.db(error));
        }
    }
}