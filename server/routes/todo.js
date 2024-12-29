// step1
const express = require('express');
const router = express.Router();
//import controllers
const { create, list, update, remove } = require('../controllers/todo');
//Code Router http://localhost:5000/api/todo
router.get('/todo', list);
router.post('/todo', create);
router.put('/todo/:todoid', update);
router.delete('/todo/:todoid', remove);
module.exports = router;
