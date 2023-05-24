const express = require('express');
const router =  express.Router();

router.get('/',(req, res)=>{
    const obj = {
        a: 'name',
        no: 17
    }
    res.json(obj);
})

module.exports = express.Router