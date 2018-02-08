const users = `
    type GroupeUsers {
        id: ID!
        libelle: String
    }

    type Users {
        id: ID!
        nom: String
        prenom: String
        email: String
        telephone: String
        groupe: GroupeUsers!
    }
`;
module.exports = users;