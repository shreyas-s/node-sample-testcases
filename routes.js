const express = require('express');
const app = express();
const request = require('supertest');

app.get('/user',(req,resp)=>{
    resp.status(200).json({ name: 'Ram'});
});

// app.listen(3000,()=>{
//     console.log("connected successfully");
// })

module.exports.app = app;