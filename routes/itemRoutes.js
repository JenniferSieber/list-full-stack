const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Item = require('../models/Item')
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/itemController')

router.get('/', (req, res) => {
  res.render('index')
})
router.get('/item', getItems)
router.post('/item', createItem)
router.post('/item/update/:id', updateItem)
router.delete('/item/delete/:id', deleteItem)

module.exports = router
