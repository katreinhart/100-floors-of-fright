const model = require('../model')

const getAllFloors = (req, res, next) => {
  const floors = model.getAllFloors()
  res.status(200).json(floors)
}

const getOneFloor = (req, res, next) => {
  const response = model.getOneFloor(req.params.id)
  console.log(response)
  if(response.error) {
    return next(response)
  } else {
    res.status(200).json({ data: response })
  }
}

module.exports = {
  getAllFloors,
  getOneFloor
}