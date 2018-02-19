const modelUser = require('./src/model/Users');
const model = require('./src/model');
const util = require('./src/util');
const user={
    id:'dddd-jjjj-sss',
    nom: 'Toure',
    prenom: 'Mamadou',
    email:'lkjlkjl@gmail.com',
    groupeUser:{
        id:'tttt-aaaa-bbbb'
    },
    password:125,
    'eleve':'ok',
    'moi':{id:5}
}

// console.log(Object.keys(Object.keys(user)).map(key=>`$${parseInt(key)+1}`));

//  model.insert(user,modelUser);

console.log(util.numerotationForRequetePrepare(['nom','prenom','age']));