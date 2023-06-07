const db = require('../controllers/propowner.controller');
const express = require("express");
const app = express.Router(); //THIS TO EXPORT ALL THE ROUTES

app.get('/users', db.getpropowner)
app.get('/users/:id', db.getpropownerById)
app.post('/users', db.createpropowner)
app.put('/users/:id', db.updatepropowner)
app.delete('/users/:id', db.deletepropowner)

module.exports = app;

