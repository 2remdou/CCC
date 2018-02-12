module.exports = `
    type Query {
        groupeUser(id: ID!): GroupeUser
        groupeUsers: [GroupeUser]

        user(id: ID!): User
        users: [User]
    }
`;