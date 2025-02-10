const database = require('../database/connection');

class DataController{
    async index(req, res){
        const data = await database('clientes').select('*');
        res.json(data);
    }

    async byid (req, res){
        const { id } = req.params;
        const data = await database('clientes').where({ id }).select('*');
        res.json(data);
    }
}

module.exports = new DataController();