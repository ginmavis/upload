/* eslint-disable prefer-template */
/* eslint-disable eol-last */
const express = require('express');
const multer = require('multer');

// cho phép lưu ở đâu , đặt tên file, và xử lí hàm
const storage = multer.diskStorage({
    destination: (req, file, cd) => cd(null, './public'),
    filename: (req, file, cb) => cb(null, file.originalname)
        //req.body.email :đặt tên file theo tên gmail đăng nhập (fail)
        //file.originalname : lấy tên file ở trong máy
});

// dest : chỉ cho phép lưu ở đâu
// const upload = multer({ dest: './public' });

const upload = multer({ storage });

const app = express();

app.set('views', './view');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

app.post('/signup', upload.single('profile'), (req, res) => {
    res.send(req.body);
});

app.listen(3000, () => console.log('server start'));