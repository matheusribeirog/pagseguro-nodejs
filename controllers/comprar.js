var PagSeguro = require('pagseguro-nodejs');

var pagseguro = new PagSeguro({
    email: 'Insert Your Email Here',
    token: 'Insert your token here',
    mode: PagSeguro.MODE_SANDBOX,
    debug: true
});

pagseguro.currency('BRL');
pagseguro.reference('REFERENCE_CODE');

pagseguro.sender({
    name: 'Matheus Ribeiro',
    email: 'matheus@gmail.com',
    phone: {
        areaCode: '51',
        number: '12345678'
    }
});


module.exports={
    adicionar(req,res){
        pagseguro.addItem({
            id: '1',
            description: 'produto1',
            amount: '40.00',
            quantity: '1'
        });
        res.redirect('/')
          return console.log("item adicionado");
          
        },

    finalizar(req,res){
        const tudo=req.body;
        console.log(tudo);
        res.redirect('/sucesso')
        pagseguro.shipping({
            type: 1,
            name: req.body.nome,
            email: req.body.email,
            card:req.body.cartao,
            cvv:req.body.cvv,
            date:req.body.data,
            address: {
                street: 'Rua Do 10',
                number: '10',
                city: 'Cidade nota 10',
                state: 'SP',
                country: 'BRA'
            }
            
        });
        
        pagseguro.checkout(function(success, response) {
            if (success) {
                console.log('Success');
                console.log(response);
            } else {
                console.log('Error');
                console.error(response);
            }
            
        });
        res.send(console.log("sucesso"))
       
    },
    usuario(req,res){
        res.render('usuario')

    }
}
