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

pagseguro.shipping({
    type: 1,
    name: 'Edvaldo Szymonek',
    email: 'edvaldoszy@gmail.com',
    address: {
        street: 'Endereco',
        number: '10',
        city: 'Nome da cidade',
        state: 'PR',
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
