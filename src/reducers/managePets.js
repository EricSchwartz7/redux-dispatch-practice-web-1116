export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type){
    case 'ADD_PET':
      return {pets: [...state.pets, action.payload]}
    case 'REMOVE_PET':
      let newPets = state.pets.filter(function(pet){
        return pet.id != action.payload
      })
      return {pets: newPets}
    default:
      return state
  }
}

export function dispatch(action){
  state = (managePets(state, action))
  render()
}

// export function render(){
//   let container = document.getElementById('container')
//   let pets = state.pets.map((pet) => {
//     return `<li>${pet.name}</li>`
//   })
//   container.innerHtml = `<ul>${pets.join("")}</ul>`
// }

export function render(){
  let container = document.getElementById('container')
  let petNames = state.pets.map(function(pet){
    return `<li>${pet.name}</li>`
  })
  container.innerHtml = `<ul>${petNames.join("")}</ul>`
}
