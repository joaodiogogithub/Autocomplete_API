var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',   
        user : 'root',      
        password : '',
        database : 'agendapr_db1' 
     }
});
module.exports = knex