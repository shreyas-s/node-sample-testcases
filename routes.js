const express = require('express');
var router = express.Router();
const request = require('supertest');

router.get('/',(req,resp)=>{
    resp.status(200).json({ name: 'Ram'});
});


module.exports = router;


