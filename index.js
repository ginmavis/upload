/* eslint-disable prefer-template */
/* eslint-disable eol-last */
const express = require('express');
const upload = require('./uploadConfig');

const app = express();

app.set('views', './view');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

app.post('/signup', upload.single('profile'), (req, res) => {
    res.send(req.file);
});

app.use((err, req, res, next) => {
    res.send(err.message);
});
// nếu không ghi đúng link thì sẽ tự động nhảy đến đây
app.get('*', (req, res) => res.send('cannot find this link'));

app.listen(3000, () => console.log('server start'));