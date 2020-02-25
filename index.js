/* eslint-disable eol-last */
const express = require('express');
const multer = require('multer');

const upload = multer({ dest: './public' });


const app = express();

app.set('views', './view');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

app.post('/signup', upload.single('profile'), (req, res) => {
    res.send(req.body);
});

app.listen(3000, () => console.log('server start'));