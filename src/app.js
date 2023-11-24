const express = require('express');
const path = require('path')
const app = express();

const port = process.env.PORT || 3030;
app.listen(3030,()=> console.log(`Servidor corriendo en el puerto: http://localhost:${port}`));

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
 