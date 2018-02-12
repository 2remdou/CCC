const users = require('./Users');
const query = require('./Query');
const mutation = require('./Mutation');

module.exports = `
    ${users},
    ${query},
    ${mutation}
`;