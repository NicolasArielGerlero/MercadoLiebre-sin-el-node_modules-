const express = require('express');
const path = require('path')
const app = express();

app.listen(3030,()=> console.log('Servidor corriendo en el puerto 3030 - http://localhost:3030'));

app.use(express.static('public'));

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'./views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
 