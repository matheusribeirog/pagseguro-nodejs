const express= require("express");
const bodyParser=require("body-parser")
const app=express();

const routes=require('./routes')

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(routes)

app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
})