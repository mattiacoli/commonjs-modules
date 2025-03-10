// import modules
const name = require("./name")
const hobbies = require("./hobbies")



/**
 * Creates an object representing a person with their full name and hobbies.
 *
 * @returns {Object} An object containing the person's full name and hobbies.
 * @property {Object} fullName - an object cointaining the persons's first name and last name.
 * @property {string[]} hobbies - An array of the person's hobbies.
 */
function getPeopleObj (){
  const people = {
    fullName : name('Mattia', 'Coli'),
    hobbies : hobbies('Musica', 'Scacchi', 'Cubo di Rubik')
  }

  return people

}

console.log(getPeopleObj());



