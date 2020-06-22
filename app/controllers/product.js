const express = require('express');
const router = express.Router();

// define the home page route
router.get('/product', async function(req, res) {
    res.render('product/product', {
        title: '제품',
        description: 'product'
    })
});

router.get('/detail', async function(req, res) {
    res.render('product/detail', {
        title: 'detail',
        description: 'detail'
    })
});

module.exports = router;



