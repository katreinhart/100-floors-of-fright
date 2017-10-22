const fs = require('fs')

const floors = JSON.parse(fs.readFileSync(__dirname + '/floors.json', 'utf-8'))

function getAllFloors() {
  return floors
}

function getOneFloor(id) { 
  console.log('get one floor', id)
  console.log(typeof(floors))
  const floor = floors.find(fl => fl.id == id)
  console.log(floor)
  if(floor) {
    return floor
  }
  else {
    return { status: 404, message: "Floor not found" }
  }
}

module.exports = {
  getAllFloors,
  getOneFloor
}