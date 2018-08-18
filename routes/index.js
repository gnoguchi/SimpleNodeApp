const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node App API",
        version: "1.0.0"
    });
});

router.get('/customers', (req, res, next) => {
    // const clientes = "joao"
    const clientes = ['joao', 'maria', 'josé']

    res.status(200).send(clientes)
});


module.exports = router