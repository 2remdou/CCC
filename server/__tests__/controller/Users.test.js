const sinon = require('sinon');
const model = require('../../src/model');
const users = require('../../src/controller/Users');
const bcrypt = require('bcrypt');
const user={
    id:'dddd-jjjj-sss',
    nom: 'Toure',
    prenom: 'Mamadou',
    email:'lkjlkjl@gmail.com',
    groupeUser:{
        id:'tttt-aaaa-bbbb'
    }
};

describe('Test controller users',()=>{
    // expect.assertions(1);
    test('create user',()=>{
        const u = {
            id:'dddd-jjjj-sss',
            nom: 'Toure',
            prenom: 'Mamadou',
            email:'lkjlkjl@gmail.com',
            groupeUser:{
                id:'tttt-aaaa-bbbb'
            }
        };
        const stubBcrypt = sinon.stub(bcrypt,'hash');
        const stubModel = sinon.stub(model,'insert');
        stubBcrypt.resolves('$2a$12$V6f4j5toByivDIKUqBO9ceqd8kXEavZUxhj0x3Shfr7wJCrve9B82');
        stubModel.resolves(u);

        return expect(users.mutation.createUser(null,{user},null)).resolves.toEqual(u);
    })
})