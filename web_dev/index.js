const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
})

app.get('/notes', (req, res) => {
    res.render("notes");
})

app.get('/devops_notes', (req, res) => {
    res.render("devops_notes");
})

app.get('/webdev_notes', (req, res) => {
    res.render("webdev_notes");
})

app.get('/database_notes', (req, res) => {
    res.render("database_notes");
})

app.listen(3000, () => {
    console.log('listening')
})