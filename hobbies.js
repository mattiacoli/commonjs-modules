
/**
 * Returns an array of hobbies.
 *
 * @param {string} hobbyOne - The first hobby.
 * @param {string} hobbyTwo - The second hobby.
 * @param {string} HobbyThree - The third hobby.
 * @returns {string[]} An array containing the three hobbies.
 */
function getHobbiesArray(hobbyOne, hobbyTwo, HobbyThree) {
  const hobbiesArr = []
  hobbiesArr.push(hobbyOne, hobbyTwo, HobbyThree)

  return hobbiesArr
}

// export CJS notation
module.exports = getHobbiesArray