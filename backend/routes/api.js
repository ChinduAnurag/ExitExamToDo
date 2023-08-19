const express = require('express')
const { findById } = require('../models/todo')
const router = express.Router() //routing function
const DATA = require('../models/todo.js') // DB of todo



// ToDo full list read 
router.get('/todolist', async (req, res) => {

    try {

        const list = await DATA.find()
        res.send(list)


    } catch (error) {
        console.log(error)
    }

})

//Add new item to ToDo List

router.post('/todo', async (req, res) => {
    try {

        console.log(req.body)
        let item = {  //to fetch and save data from front end in server
            description: req.body.description,
            status: req.body.status
        }


        const newItem = new DATA(item) //to check incoming data
        const saveItem = await newItem.save() //mongoDB save

        res.send(saveItem);


    } catch (error) {

        console.log(error)
    }
})

// Item delete 

router.delete('/todo/:id', async (req, res) => {
    try {
        let id = req.params.id
        const deleteItem = await DATA.findByIdAndDelete(id)
        res.send(deleteItem)


    } catch (error) {
        console.log(error)

    }
})

module.exports = router

