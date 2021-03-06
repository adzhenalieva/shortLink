const express = require('express');
const Link = require('../models/Link');
const nanoid = require('nanoid');


const router = express.Router();


router.get('/', (req, res) => {
    Link.find()
        .then(links => {
            res.send(links)
                .catch(() => res.sendStatus(500))
        })
});

router.get('/:shortURL', (req, res) => {
    Link.findOne({shortURL: req.params.shortURL})
        .then(result => {
            if (result) return res.status(301).redirect(result.originalURL);
            res.sendStatus(404)
        })
        .catch(() => res.sendStatus(500));
});

router.post('/', (req, res) => {
    const linkData = req.body;
    linkData.shortURL = nanoid(6);
    const link = new Link(linkData);
    link.save()
        .then(result => res.send(result))
        .catch(error => res.sendStatus(400).send(error));
});

module.exports = router;