const mongoose = require('mongoose')
const Item = require('../models/Item')


// '/item' get the items
const getItems = async (req,res) => {
  try {
    const items = await Item.find({})
    res.render('item', { items })
  } catch(err) {
    console.log('Get Items error: ', err)
  }
}


// '/item' create
const createItem = async (req, res) => {
  const newItem = new Item(req.body)
  try {
    await newItem.save()
    res.redirect('/item')
  } catch(err) {
    console.log('Create Item error: ', err)
    //res.redirect('/item?error=true')
  }
}

// '/item/update/:id' update the items
const updateItem = async (req, res) => {
  const { id } = req.params 
  const { name, description, price } = req.body 
  try {
    const updatedItem = await Item.findByIdAndUpdate(id,  {name, description, price })
    res.redirect('/item')
  } catch(err) {
    console.log('update item err: ', err)
    //res.redirect('/item?error=true')
  }
}

// '/item/update/:id' delete an item
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params 
    await Item.findByIdAndDelete(id)
    res.status(200).json({ message: 'Item deleted successfully.'})
  } catch(err) {
    console.log('Delete Item error: ', err)
  }
}

module.exports = {
                  getItems, 
                  createItem,
                  updateItem,
                  deleteItem,
                }