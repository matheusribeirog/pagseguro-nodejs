const express=require('express');
const app=express.Router();
const comprarController=require('./controllers/comprar')

app.get('/', function(req,res){
    res.render('index')
})

app.post('/infos',comprarController.criaruser)


module.exports=app;