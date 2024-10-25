const express = require('express');
const app = express();
app.use(express.static('Client/Public'));
const port = 3000;

app.get('/home', function (req, res) {
    res.sendFile('home.html', { root: './Client/Views' })
})

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: './Client/Views' })
})

app.get('/profile', function (req, res) {
    res.sendFile('profile.html', { root: './Client/Views' })
})

app.get('/registration', function (req, res) {
    res.sendFile('registration.html', { root: './Client/Views' })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})