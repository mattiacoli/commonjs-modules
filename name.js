function getPersonObj (name, lastName){
  const personObj ={
    name: name,
    lastName: lastName,
  }

  return personObj
}


const person = getPersonObj('Mattia', 'Coli')

console.log(person);
