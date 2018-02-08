module.exports = `
    type Query {
        groupeUser(id: ID!): GroupeUsers
        groupeUsers: [GroupeUsers]
        users: [Users]
    }
`;