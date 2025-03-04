async function getChefBirthday(id) {
  try {
    const recipeReq = await fetch(`https://dummyjson.com/recipes/${id}`)
    const recipe = await recipeReq.json()
      
    if (!recipe) throw new Error("Recipe not found")
    
    const userReq = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
    const { birthDate } = await userReq.json()
    
     const chefBirthday = new Date(birthDate).toLocaleDateString()
         
    return chefBirthday
  } catch (err) {
    console.error(err)
  }
}

getChefBirthday(2).then(birthday => console.log(birthday))
