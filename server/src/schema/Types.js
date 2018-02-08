const users = require('./Users');
const query = require('./Query');

module.exports = `
    ${users},
    ${query}
`;