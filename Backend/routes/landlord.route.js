const db = require('../controllers/landlord.controller');
const express = require("express");
const app = express.Router(); //THIS TO EXPORT ALL THE ROUTES

app.get('/users', db.getlandlord)
app.get('/users/:id', db.getlandlordById)
app.post('/users', db.createlandlord)
app.put('/users/:id', db.updatelandlord)
app.delete('/users/:id', db.deletelandlord)

module.exports = app;

