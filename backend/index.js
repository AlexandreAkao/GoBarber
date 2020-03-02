const express = require('express');

const server = express();

server.use(express.json());

server.use((req, res, next) => {
    console.log(`Metodo: ${req.method}`);
    console.log(`URL: ${req.url}`);

    return next();
});

// server.get('/t', (req, res) => {
//     return res.json({ message: 'hello world'})
// });


server.listen(3000, () => {
    console.log('Rodando...');
});