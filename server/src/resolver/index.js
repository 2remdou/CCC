const groupeUsers = require('../controller/GroupeUsers');
const users = require('../controller/Users');

module.exports = {
    Query : Object.assign({},
        groupeUsers.query,
    ),
    Mutation: Object.assign({},
        users.mutation
    )
}
    