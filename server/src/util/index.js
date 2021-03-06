const diff = require('lodash/fp/difference');
const join = require('lodash/fp/join');

const capitalize = (word) => word.replace(/\b\w/, l=>l.toUpperCase());

const prepareForDB = (element,model) => {
    const  e= {...element};
    model.relations.forEach(relation=>{
        if(e[`${relation}`] && typeof e[relation]==='object' && e[relation]['id']){
            e[`id${capitalize(relation)}`]=e[relation]['id'];
            delete e[relation];
        }
    })
    //suppression des attributs superflu
    const fields = Object.keys(model.constraint);
    diff(Object.keys(e),fields).forEach(key=>{
        delete e[key];
    })
    return e;
};

const mettreEntreParenthese = (keys) => `(${keys})` ;

const mettreEntreParentheseAvecQuote = (keys) => `(${keys.map(k=>typeof k === 'number'?`${k}`:`'${k}'`).join(',')})` ;

const numerotationForRequetePrepare = (values) => Object.keys(Object.keys(values))
                                                        .map(key=>`$${parseInt(key)+1}`);

const generateInsertStatement = (table,value) => `insert into ${table}${mettreEntreParenthese(Object.keys(value))} values${mettreEntreParenthese(numerotationForRequetePrepare(value))} returning *`

module.exports = {
    capitalize, 
    prepareForDB,
    mettreEntreParenthese, 
    mettreEntreParentheseAvecQuote,
    numerotationForRequetePrepare,
    generateInsertStatement 
}