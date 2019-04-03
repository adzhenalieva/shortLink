const express = require('express');
const links = require('./app/links');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const port = 8000;
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

mongoose.connect('mongodb://localhost/link', {useNewUrlParser: true}).then(() => {
    app.use('/links', links);

    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    });
});