const groupeUsers = require('../controller/GroupeUsers');

module.exports = {
    Query : Object.assign({},
        groupeUsers.query
    )
}
    