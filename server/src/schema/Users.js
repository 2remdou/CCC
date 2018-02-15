const users = `
    type GroupeUser {
        id: ID!
        libelle: String
    }

    input GroupeUserInput {
        id: ID
        libelle: String
    }

    type User {
        id: ID!
        nom: String!
        prenom: String!
        email: String
        telephone: String!
        groupeUser: GroupeUser!
    }

    input UserInput {
        id: ID
        nom: String!
        prenom: String!
        email: String
        telephone: String!
        groupeUser: GroupeUserInput!
        password: String!
    }
`;
module.exports = users;