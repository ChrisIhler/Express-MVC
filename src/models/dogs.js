const dogs = []
const uuid = require('uuid/v4')

class Dogs {
  constructor() {
    this.dogs = []
  }


  getAll(){
    return this.dogs
  }

  getID(id) {
    let dog = this.dogs.filter(dog => dog.id === id)
    return dog[0]
  }

  create(dogData) {
    let errors = []
    if (!dogData.name) {
      errors.push('Name required')
    }
    if (!dogData.breed) {
      errors.push('breed required')
    }
    if (errors.length) {
      // why would i return errors in an object? 
      return { errors }
    }
    let dog = {...dogData, id: uuid()}
    this.dogs.push(dog)
    return dog
  }

  update(dogData){
        console.log(dogData)

    let errors = []
    
    let dog = this.getID(dogData.id)
    if (!dog) {
      errors.push(`Could not find dog with id of ${dogData.id}.`)
      return { errors}
    }
    if (!dogData.name) {
      errors.push('Name required')
    }
    if (!dogData.breed) {
      errors.push('Breed required')
    }
    console.log(errors);
    
    if (errors.length) {
      return {errors}
    }

    dog = dogData
    return dog
  }

  deleteID(id){
    let dog = this.getID(id)
    if (!dog) {
      return { errors: ['Could not find dog with id of ${id}'] }
    }
    let index = this.dogs.indexOf(dog)
    this.dogs.splice(index,1)
  }
}



module.exports = Dogs
