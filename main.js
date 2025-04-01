async function getChefBirthday(id) {
  try {
    const recipeReq = await fetch(`https://dummyjson.com/recipes/${id}`)
    const recipe = await recipeReq.json()
      
    if (recipe?.message) throw new Error(recipe.message)
    
    const userReq = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
    const user = await userReq.json()

    if (user?.message) throw new Error(user.message)
    
     const chefBirthday = new Date(user.birthDate).toLocaleDateString()
         
    return chefBirthday
    
  } catch (err) {
    console.error(err)
  }
}

getChefBirthday(2).then(birthday => console.log(birthday))
