const express=require('express');
const app=express.Router();
const comprarController=require('./controllers/comprar')

app.get('/', function(req,res){
    res.render('index')
})

app.post('/adicionar',comprarController.adicionar)
app.get('/usuario',comprarController.usuario)
app.post('/finalizar',comprarController.finalizar)

app.get('/sucesso',function(req,res){
    res.render('sucesso.ejs')
})

module.exports=app;