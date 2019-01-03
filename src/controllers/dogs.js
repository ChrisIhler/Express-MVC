const uuid = require('uuid/v4')
Dogs = require('../models/Dogs')



//--- what is this doing exactly? 
const dogs = new Dogs()

function getAll (req, res, next) {
  res.json({data: dogs.getAll()})
}

function getID(req, res, next) {
  const id = req.params.id
  const data = dogs.getID(id)
  if (!data) return next({ status: 404, message: `Could not find dog with id ${id}`})

  res.json({ data })
  }

function create(req, res, next) {
    const { name, breed } = req.body
    const data = dogs.create({ name, breed })
    if (data.errors) return next({ status: 400, message: data.errors.join()})
    // on this line how could we use data.errors in the example and not data
    //why does the error message return with a join function? 
    res.status(201).json({data})
}

function update(req, res, next) {
  const id = req.params.id
  const {name, breed} = req.body

  const data = dogs.update({ id, name, breed})
  if (data.errors) return next({ status: 400, message: data.errors.join()})

  res.status(200).json({ data })
}

function deleteID(req, res, next) {
  const id = req.params.id
  const data = dogs.deleteID(id)
  if (data !== undefined && data.errors) return next ({ status: 404, message: data.errors.join() })

  res.status(204).json()
}

module.exports = { getAll, getID, create, update, deleteID }