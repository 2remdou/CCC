const modelUser = require('./src/model/Users');
const model = require('./src/model');
const util = require('./src/util');
const bcrypt = require('bcrypt');
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
bcrypt.hash('toure',12).then(res=>console.log(res));

// console.log(util.numerotationForRequetePrepare(['nom','prenom','age']));