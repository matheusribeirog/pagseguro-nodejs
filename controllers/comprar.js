var PagSeguro = require('pagseguro-nodejs');

var pagseguro = new PagSeguro({
    email: 'matheus.gomes94@etec.sp.gov.br',
    token: '8E1CDBAB4F634769958629578ED3DCB5',
    mode: PagSeguro.MODE_SANDBOX,
    debug: true
});

pagseguro.currency('BRL');
pagseguro.reference('REFERENCE_CODE');

/* Opcional */
pagseguro.redirect('http://www.example.com/callback');
pagseguro.notify('http://www.example.com/notify');

/* Produtos */
pagseguro.addItem({
    id: '1',
    description: 'produto',
    amount: '40.00',
    quantity: '1'
});

pagseguro.sender({
    name: 'Matheus Ribeiro',
    email: 'matheus@gmail.com',
    phone: {
        areaCode: '51',
        number: '12345678'
    }
});


module.exports={
    criaruser(req,res){
       
        const name= req.body.name
        const email= req.body.email
        const street= req.body.rua
        const  number=  req.body.numero
        const  city=  req.body.cidade
           
        }
}