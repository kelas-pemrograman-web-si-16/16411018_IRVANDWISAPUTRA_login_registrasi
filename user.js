var express = require('express');

var router = express.Router();

router.get('/registrasi', function(req, res, next) {
    res.render('registrasi', {nama: 'Irvan Dwi Saputra'})
})

module.exports = router;