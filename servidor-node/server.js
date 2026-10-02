const http = require('http');

const server = http.createServer((req, res) => {
  //Exercício 4: requisição
  console.log(`${req.method} ${req.url}`);

  //Exércício 5: rotas
  if (req.url === '/') {
    res.statusCode = 200;
    res.end(`Bem-vindo ao meu app em Node.js!\nMetodo utilizado: ${req.method}`);
  } else if (req.url === '/sobre') {
    res.statusCode = 200;
    res.end('Essa e a pagina sobre o app');
  } else if (req.url === '/alunos') {
    res.statusCode = 200;
    res.end('Lista de alunos');
  } else if (req.url === '/contato') {
    res.statusCode = 200;
    res.end('Entre em contato');
  } else {
    // Rota inexistente: status 404 (Not Found)
    res.statusCode = 404;
    res.end('404 - Pagina não Encontrada.');
  }
});

server.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
