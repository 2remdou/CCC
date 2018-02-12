const Sequelize = require('sequelize');
const sequelize =  new Sequelize(process.env.PGDATABASE,process.env.PGUSER,process.env.PGPASSWORD,{
    dialect: 'postgres'
});
const { Pool } = require('pg');

const poll = new Pool();

module.exports = {
    query : (statement,params) =>  poll.query(statement,params).then(res=>res.rows).catch(e=>console.log(e)),
    querySingleRow : (statement,params) => poll.query(statement,params).then(res=>res.rows[0]),
    sequelize
}