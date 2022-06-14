const Sequelize = require('sequelize');

const sequelize = new Sequelize('celke', 'root', 
'', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conexão relizada com sucesso');
}).catch(function(err){
    console.log('Erro ao realizar conexão com o BD: ' + err);
});

module.exports = sequelize;
