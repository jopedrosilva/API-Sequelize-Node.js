const Sequelize = require('sequelize');

const sequelize = require('../connection/conn');

const Pagamento = sequelize.define('pagamentos', {
    nome: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE
    }
});

//Pagamento.sync({force: true});

module.exports = Pagamento;