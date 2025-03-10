
/**
 * Creates a person object with the given name and last name.
 *
 * @param {string} name - The first name of the person.
 * @param {string} lastName - The last name of the person.
 * @returns {Object} The person object containing the name and last name.
 */
function getPersonObj (name, lastName){
  const personObj ={
    name: name,
    lastName: lastName,
  }

  return personObj
}

// export CJS notation
module.exports = getPersonObj