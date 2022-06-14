const express = require('express');
const Pagamento = require('./models/Pagamento');

const app = express();

app.use(express.json());

/*Pagamento.create({
    nome: "Energia 2",
    valor: 220
});*/

//POST Para Cadastrar Pagamentos
app.post("/pagamento", (req, res) => {
    const pagamento = Pagamento.create(req.body).then((pagamento) => {
        return res.json(pagamento);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Pagamento não cadastrado!"
        });
    });;
});

//GET Para Visualiar todos os Pagamentos
app.get('/pagamento', (req, res) => {
    Pagamento.findAll({}).then((pagamento) => {
        return res.json(pagamento);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum pagamento encontrado!"
        });
    });
});

//GET Para visualizar um único Pagamento
app.get("/pagamento/:id", (req, res) => {
    Pagamento.findOne({where:{id:req.params.id}}).then((pagamento) => {
        return res.json(pagamento);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum pagamento encontrado!"
        });
    });
});

//PUT Para atualizar o Pagamento
app.put("/pagamento/:id", (req, res) => {
    const pagamento = Pagamento.update( req.body ,{where:{id: req.params.id}}).then(() => {
        return res.json({
            Error: false,
            message: "Pagamento editado com sucesso!"
        });
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Pagamento não editado com sucesso!"
        });
    });;
});

//DELETE Para deletar pagamentos
app.delete("/pagamento/:id", (req, res) => {
    const pagamento = Pagamento.destroy({where:{id: req.params.id}}).then(() => {
        return res.json({
            error: false,
            message: "Pagamento deletado com sucesso!"
        });
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Pagamento não deletado com Sucesso!"
        });
    });;
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});
