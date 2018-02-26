const util = require('../../src/util');
const userBefore={
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
};

describe('test util',()=>{

    test('capitalize',()=>{
        expect(util.capitalize('rouge')).toBe('Rouge');
    });

    test('prepareForDb',()=>{
        const userAfter={
            id:'dddd-jjjj-sss',
            nom: 'Toure',
            prenom: 'Mamadou',
            email:'lkjlkjl@gmail.com',
            idGroupeUser:'tttt-aaaa-bbbb',
            password:125
        };
        expect(util.prepareForDB(userBefore,require('../../src/model/Users'))).toEqual(userAfter);
    });

    test('mettreEntreParenthese',()=>{
        expect(util.mettreEntreParenthese(['nom','prenom','age'])).toBe('(nom,prenom,age)');
    });

    test('mettreEntreParentheseAvecQuote',()=>{
        expect(util.mettreEntreParentheseAvecQuote(['Toure','Mamadou',99])).toBe(`('Toure','Mamadou',99)`);
    });

    test('numerotationForRequetePrepare',()=>{
        expect(util.numerotationForRequetePrepare(['nom','prenom','age'])).toEqual(['$1','$2','$3']);
    });
});