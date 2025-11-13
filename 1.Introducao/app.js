import express from 'express'; // importar o express

const app = new express();  // Cria o objeto app recebendo um novo express
const porta = 3000;

const ola_mundo = function(req, res){ // passando como parametro a requisição e a resposta
    res.send('Olá Mundo!');  // exibindo a mensagem 
}

app.get('/', ola_mundo); // pegando a mensagem para ser exibida

app.listen(porta, () => {
    console.log("Servidor rodando no endereço http://127.0.0.1:3000\n"); // conectando no servidor!
});