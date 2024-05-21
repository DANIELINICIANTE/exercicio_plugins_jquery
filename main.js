$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    
    $('#cadastroForm').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira o seu telefone',
            cpf: 'Por favor, insira o seu CPF',
            cep: 'Por favor, insira o seu CEP',
            endereco: 'Por favor, insira o seu endereço'
        },
        submitHandler: function(form) {
            alert('Formulário enviado com sucesso!');
            form.submit();
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});
$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000'); // Certifique-se de que a máscara para o CEP está correta
    
    // Restante do código...
});
